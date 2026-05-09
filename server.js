const express = require("express");
const path = require("path");
const { supabase } = require("./supabase");

const app = express();
const host = "0.0.0.0";
const port = Number(process.env.PORT || 4173);
const rootDir = __dirname;
const stateRowId = "main";

app.disable("x-powered-by");
app.use(express.json({ limit: "2mb" }));

function noStore(res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");
}

function sendApiError(res, status, message) {
  return res.status(status).json({ ok: false, error: message });
}

function sendBracketPage(req, res) {
  noStore(res);
  res.sendFile(path.join(rootDir, "play-in-bracket.html"));
}

app.get("/", sendBracketPage);
app.get("/play-in-bracket.html", sendBracketPage);

app.use(
  "/asset",
  express.static(path.join(rootDir, "asset"), {
    etag: false,
    lastModified: false,
    maxAge: 0,
    setHeaders: noStore,
  }),
);

app.get("/api/state", async (req, res) => {
  noStore(res);

  try {
    const { data, error } = await supabase
      .from("app_state")
      .select("data")
      .eq("id", stateRowId)
      .maybeSingle();

    if (error) throw error;

    if (!data) {
      return sendApiError(
        res,
        404,
        "No saved state exists in Supabase for id 'main'. Run supabase-schema.sql or save once.",
      );
    }

    return res.json(data.data);
  } catch (error) {
    console.error("Supabase load failed:", error);
    return sendApiError(res, 503, "Unable to load saved state from Supabase.");
  }
});

app.post("/api/state", async (req, res) => {
  noStore(res);

  try {
    if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
      return sendApiError(res, 400, "Request body must be one JSON object.");
    }

    const { error } = await supabase.from("app_state").upsert(
      {
        id: stateRowId,
        data: req.body,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "id" },
    );

    if (error) throw error;

    return res.json({ ok: true });
  } catch (error) {
    console.error("Supabase save failed:", error);
    return sendApiError(res, 503, "Unable to save state to Supabase.");
  }
});

app.use((error, req, res, next) => {
  if (error instanceof SyntaxError && "body" in error) {
    noStore(res);
    return sendApiError(res, 400, "Request body must be valid JSON.");
  }

  return next(error);
});

app.use((req, res) => {
  noStore(res);
  sendApiError(res, 404, "Not found.");
});

// Render sets process.env.PORT. The 0.0.0.0 host lets Render route public traffic to this Express app.
app.listen(port, host, () => {
  console.log(`R6 bracket app listening on ${host}:${port}`);
});

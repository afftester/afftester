import fetch from "node-fetch";

export async function generateRakutenToken(
  clientId: string,
  clientSecret: string,
  accountId: string,
): Promise<string> {
  if (!clientId || !clientSecret || !accountId) {
    throw new Error("Missing required parameters for generating token");
  }

  const url = "https://api.linksynergy.com/token";
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization:
      "Bearer " + Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
  };
  const payload = { scope: accountId };

  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: new URLSearchParams(payload).toString(),
  });

  const data = (await response.json()) as { access_token: string };
  if (!data.access_token) {
    throw new Error("Failed to generate Rakuten token");
  }
  return data.access_token;
}

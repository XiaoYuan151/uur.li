export const onRequestGet = async ({ request, env }) => {
  const url = new URL(request.url);
  const shortCode = url.pathname.split("/").filter(Boolean)[0];
  const defaultUrl = await LINK_DB.get("default");
  if (!shortCode) {
    return Response.redirect(defaultUrl, 301);
  }
  const longUrl = await LINK_DB.get(shortCode);
  if (longUrl) {
    return Response.redirect(longUrl, 302);
  } else {
    return Response.redirect(defaultUrl, 301);
  }
};

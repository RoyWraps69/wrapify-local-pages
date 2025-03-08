
// ESM syntax
export const handler = async (event) => {
  const debugInfo = {
    node_version: process.version,
    node_env: process.env.NODE_ENV,
    netlify_env: process.env.NETLIFY,
    site_name: process.env.SITE_NAME,
    deploy_id: process.env.DEPLOY_ID,
    build_id: process.env.BUILD_ID,
    context: process.env.CONTEXT,
    url: process.env.URL,
    deploy_url: process.env.DEPLOY_URL,
    commit_ref: process.env.COMMIT_REF,
    vite_version: process.env.VITE_VERSION,
    vite_base_url: process.env.VITE_BASE_URL,
    vite_app_env: process.env.VITE_APP_ENV,
  };

  return {
    statusCode: 200,
    body: JSON.stringify(debugInfo, null, 2),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

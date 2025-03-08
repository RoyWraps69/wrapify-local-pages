
// Helper function to assist with Vite builds on Netlify
export const handler = async (event) => {
  console.log('Vite build helper triggered');
  
  // Log environment information
  const environment = {
    nodeVersion: process.version,
    nodeEnv: process.env.NODE_ENV,
    viteVersion: process.env.VITE_VERSION,
    buildCommand: process.env.NETLIFY_BUILD_BASE ? 
      `Using Netlify CI in ${process.env.NETLIFY_BUILD_BASE}` : 
      'Local build'
  };
  
  console.log('Build environment:', JSON.stringify(environment, null, 2));
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Vite build helper executed',
      environment,
      timestamp: new Date().toISOString()
    }),
  };
};

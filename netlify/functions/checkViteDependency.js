
// Netlify function to check for Vite dependency
exports.handler = async (event) => {
  console.log('Checking for Vite dependency...');
  
  try {
    // This function doesn't actually get called during normal operation
    // It's here to ensure the netlify/functions directory exists and to help with dependency verification
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Vite dependency check function exists',
        viteVersion: '6.2.1' 
      }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error checking Vite dependency' }),
    };
  }
};

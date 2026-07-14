import app from "./app.js";
import prisma from "./config/prisma.js";


const PORT = process.env.PORT || 4000;

// app.listen(PORT, () => {
//   console.log(` Server is running on http://localhost:${PORT}`);
// });

const startServer=async ()=>{
    try{
        await prisma.$connect();
        console.log("PostgreSQL Connected");
        app.listen(PORT,()=>{
         console.log(`server is running on http://localhost:${PORT}`)
        })
    }
    catch(error){
    console.error("failed to connect to PostgreSQL");
    console.error(error);
    process.exit(1);
    }
}

startServer();

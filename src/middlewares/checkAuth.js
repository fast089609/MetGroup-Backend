import jwt from 'jsonwebtoken';


const checkAuth = async (req, res, next) => {

    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            const token = req.headers.authorization.split(" ")[1];

            //solo verificamos el token, el usuario lo consultamos cuando sea necesario
            const decoded = jwt.verify(token, process.env.KEY_JWT);

            // req.usuario = await Usuario.findById(decoded.id).select("-password -confirmado -token -createdAt -updatedAt -__v");
            req.usuario = decoded.userId;

            return next();
        } catch (error) {
            console.log(error);
            return res.status(401).json({msg: "Token vencido"});
        }
    }

    if(!token){
        const error = new Error("Token no valido");
        res.status(401).json({msg: error.message});
    }


};

export default checkAuth;
export async function LoggerMiddleware(req, res, next) {
    console.log(`Request...............................................................`);
    let session = req.session.user;
    console.log(session)
    try {
        if(session){
            // console.log('111111111111');
            // console.log(session.id);
            return next();
        }else{
            // console.log('22222222222');
            res.status(404).send({
                status: "error",
                message: "Ban chưa dăng nhập",
            });
        }
        
    } catch (error) {
        console.log(error);
        
    }
  };
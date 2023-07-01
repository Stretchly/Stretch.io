
// declare controller
const ExerciseController = {
   // getExercise method assigned the value of an anon callback
        // passing in req, res, next
   getExercise: async (req, res, next) => {
        try { 
            // destructure the request body 
                // we think this will be required to make API request more easily
                // exact format TBD, talk to Rodrigo et al about API format
            // variable selectedExercise assigned to the property on the request body
            const { selectedExercise } = req.body; // note: unsure if destructure is helpful
            
            
            // make API request
                // idk how to do that
                // this would be where the await keyword comes in
            const apiRes = "idk what to put here. Help me Rodrigo, you're my only hope"
            // store it in res.locals
            res.locals.apiRes = apiRes;
            // return the invocation of next to move to next middleware
            return next();
        } catch (error) {
            const errorObject = {
                // log to developer
                log: 'Error occurred in ExerciseController.GetExercise',
                // message to client
                message: { error: 'An error has occurred in getting an exericse'},
                status: 400
            };
            // pass error object to global error handler
            return next(errorObject);
        }
   }
}

    
module.exports = ExerciseController;
    
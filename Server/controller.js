// require('dotenv').config();
// const apiKEY = process.env.API_KEY; 


// declare controller
const StretchController = {
   // getExercise method assigned the value of an anon callback
        // passing in req, res, next
   getStretches: async (req, res, next) => {
        try { 
            // destructure the request body 
                // we think this will be required to make API request more easily
                // exact format TBD, talk to Rodrigo et al about API format
            // variable selectedExercise assigned to the property on the request body
            const { muscle } = req.query; // note: unsure if destructure is helpful
            
            // JS sample code from apininja.com: https://api-ninjas.com/api/exercises
            /* 
            var muscle = 'biceps'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

// need to pass above object and the API key into the request to the API. 
// we added some .env stuff, probably too complicated and maybe we should delete it??
// Monday: 
    // 1) finish the API call
    // 2) React 
        // ensure rendering with updated info
        // dropdown info passing through correctly --> some concern this won't work/be difficult
            // on change triggers event?
        // use sample data (arr of objects) to test while API is finished 
    // 3) frontend styling
    // 4) Stretch if all others fail: Authentication/user profile stretch goal

            */

            // make API request - fetching data from API
                // idk how to do that
                // this would be where the await keyword comes in
            // const apiRes = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&type=stretching`)
            const apiRes = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=biceps&type=stretching`)

            console.log('apiRes', apiRes);
            // store it in res.locals
            res.locals.apiRes = apiRes;
            // return the invocation of next to move to next middleware
            return next();
        } catch (error) {
            const errorObject = {
                // log to developer
                log: 'Error occurred in StretchController.GetExercise',
                // message to client
                message: { error: 'An error has occurred in getting an exericse'},
                status: 400
            };
            // pass error object to global error handler
            return next(errorObject);
        }
   }
}

    
module.exports = StretchController;

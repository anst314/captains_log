const React = require('react')

function New(){
    return(
        <div>
            <h1>New Ship </h1>
            <form action='/logs' method='POST'>
                <label htmlFor="title">Title</label> 
                <input type="text" id="title" name="title" /><br/>
                <label htmlFor="entry"></label>
                <textarea id="entry" name="entry"></textarea><br/>
                <label htmlFor="shipIsBroken">Ship is Broken</label>
                <input type="checkbox" id="shipIsBroken" name="shipIsBroken"/><br/>
                <input type="submit" value="submit"/>               
            </form>
        </div>
    )
}
module.exports = New;
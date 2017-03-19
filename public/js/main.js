function formatResponse(response){

	$('#main').append('<div class="response"><b>Response:</b><br><br>'+ JSON.stringify(response.data) +'</div>');

}

const options = {headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
  }}

function callDemo() {
	axios.get('http://spotifyserver.herokuapp.com/api/people', options)
	.then(function (response) {

		$('#main').append('<div class="action"> Made a GET request to /api/people </div>');
		formatResponse(response);

	    return axios.post('http://spotifyserver.herokuapp.com/api/people', {
	    	name: 'Sean',
	    	favoriteCity: 'New York'
	  	}, options)
	})
	.then(function (postedPerson) {
		$('#main').append('<div class="action"> Made a Post request to /api/people, adding in Sean, whose favorite city is New York </div>');
		formatResponse(postedPerson);

		return axios.get('http://spotifyserver.herokuapp.com/api/people/' + postedPerson.data.id, options)
	})
	.then(function (postedPersonToUpdate){
		$('#main').append('<div class="action"> Made a Get request to /api/people/${postedPersonToUpdate.id}');
		formatResponse(postedPersonToUpdate);

		return axios.put('http://spotifyserver.herokuapp.com/api/people/3', {
			favoriteCity: 'Brooklyn'
		}, options)

	})
	.then(function(updatedPerson){
		$('#main').append('<div class="action"> Made a Put request to /api/people/3, updating Sean\'s favorite city to Brooklyn.</div>');
		formatResponse(updatedPerson);

		return axios.get('http://spotifyserver.herokuapp.com/api/people/1', options);
	})
	.then(function(personOne){
		$('#main').append('<div class="action"> Made a Get request to /api/people/1</div>');
		formatResponse(personOne);

		return axios.delete('http://spotifyserver.herokuapp.com/api/people/1', options);
	})
	.then(function(personDeleted){
		$('#main').append('<div class="action"> Made a Delete request to /api/people/1</div>');
		formatResponse(personDeleted);

		return axios.get('http://spotifyserver.herokuapp.com/api/people', options);
	})
	.then(function(everyone){
		$('#main').append('<div class="action"> Made a Get request to /api/people</div>');
		formatResponse(everyone);
	})
}



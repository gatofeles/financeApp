Feature: Backend Endpoints 

The backend for getting information about transactions: smoke tests

Scenario: The one where I succesfully create a transaction
	Given I'm logged in the backend rest api
	When I create a positive transaction with the following values
	| field       | value          |
	| title       | cupcake        |
	| description | tasty cupcake  |
	| cost        | $2.5           |
	Then I should get a 200 response
	And the data should be available in the database

Scenario: The one where I succesfully update a transaction
	Given I'm logged in the backend rest api
	And I've created a transaction with the following values
	| field       | value          |
	| title       | burrito        |
	| description | delicious burrito  |
	| cost        | $5          |
	When I change the description to tasty burrito
	Then I should get a 200 reponse 
	And the changes should be visible in the database

Scenario: The one where I succesfully delete a transaction
	Given I'm logged in the backend rest api
	And I've created a transaction with the following values
	| field       | value          |
	| title       | car      |
	| description | really expensive car  |
	| cost        | $50000          |
	When I delete that transaction
	Then I should get a 200 reponse 
	And the transaction shouldn't be available in the database


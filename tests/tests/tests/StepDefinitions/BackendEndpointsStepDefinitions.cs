using System;
using TechTalk.SpecFlow;

namespace tests.StepDefinitions
{
    [Binding]
    public class BackendEndpointsStepDefinitions
    {
        [Given(@"I'm logged in the backend rest api")]
        public void GivenImLoggedInTheBackendRestApi()
        {
            throw new PendingStepException();
        }

        [When(@"I create a positive transaction with the following values")]
        public void WhenICreateAPositiveTransactionWithTheFollowingValues(Table table)
        {
            throw new PendingStepException();
        }

        [Then(@"I should get a (.*) response")]
        public void ThenIShouldGetAResponse(int p0)
        {
            throw new PendingStepException();
        }

        [Then(@"the data should be available in the database")]
        public void ThenTheDataShouldBeAvailableInTheDatabase()
        {
            throw new PendingStepException();
        }

        [Given(@"I've created a transaction with the following values")]
        public void GivenIveCreatedATransactionWithTheFollowingValues(Table table)
        {
            throw new PendingStepException();
        }

        [When(@"I change the description to tasty burrito")]
        public void WhenIChangeTheDescriptionToTastyBurrito()
        {
            throw new PendingStepException();
        }

        [Then(@"I should get a (.*) reponse")]
        public void ThenIShouldGetAReponse(int p0)
        {
            throw new PendingStepException();
        }

        [Then(@"the changes should be visible in the database")]
        public void ThenTheChangesShouldBeVisibleInTheDatabase()
        {
            throw new PendingStepException();
        }

        [When(@"I delete that transaction")]
        public void WhenIDeleteThatTransaction()
        {
            throw new PendingStepException();
        }

        [Then(@"the transaction shouldn't be available in the database")]
        public void ThenTheTransactionShouldntBeAvailableInTheDatabase()
        {
            throw new PendingStepException();
        }
    }
}

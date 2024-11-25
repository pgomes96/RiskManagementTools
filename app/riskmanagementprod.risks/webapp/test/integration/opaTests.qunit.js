sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagementprod/risks/test/integration/FirstJourney',
		'riskmanagementprod/risks/test/integration/pages/RisksList',
		'riskmanagementprod/risks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagementprod/risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);

module.exports = {

    protocol: 'http',
    username: 'admin',
    token: 'admin',
    host: '34.106.159.232',

    request: {
        defaults: {
            rejectUnauthorized: false
        }
    },

    jobs: [
        {
            id: 'mobileMasterSolution',
            displayName: 'mobileMasterSolution',
            eventName: 'mobileMasterSolution',
            cronInterval: '*/5 * * * * *',
            apiMethod: 'last_build_info',
    displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: true,
                displayDuration_isEnabled: true
            }
        },
        {
            id: 'mobileBuild',
            displayName: 'mobileBuild',
            eventName: 'mobileBuild',
            cronInterval: '*/5 * * * * *',
            apiMethod: 'last_build_info',
    displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: true,
                displayDuration_isEnabled: true
            },
            parameterizedAttributes: [
                {
                    attributeName: 'region',
                    jenkinsParameterName: 'REGION'
                }
            ]
        }
    ]
}
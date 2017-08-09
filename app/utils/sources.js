let _ = require('lodash');

module.exports = [
    {
        name: "unsplash",
        parseURL: function(query, size) {
            let params = [
                {
                    key: "query",
                    value: query
                },
                {
                    key: "per_page",
                    value: size
                },
                {
                    key: "client_id",
                    value: "7323119cce78d2295bc9d1f0eaff891b1f833a83480301861cb49885c027124c"
                }
            ];
            let paramsString = _.join(_.map(params, (param) => `${param.key}=${param.value}`), "&");
            console.log(paramsString);
            return `https://api.unsplash.com/search/photos?${paramsString}`;
        },
        headers: [
            {
                key: "",
                value: ""
            }
        ]
    }
];

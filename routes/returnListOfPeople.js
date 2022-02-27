const ListOfPeople = (req, res, next) => {
    const data =
        [
            {
                name: "uriya",
                age: 24,
                BirthDate: "11/11/1998",
                img: 'https://help.twitter.com/content/dam/help-twitter/brand/logo.png'
            }, {
            name: "den",
            age: 30,
            BirthDate: "11/10/1998",
            img: 'https://help.twitter.com/content/dam/help-twitter/brand/logo.png'

        }, {
            name: "ben",
            age: 24,
            BirthDate: "11/08/1998",
            img: 'https://help.twitter.com/content/dam/help-twitter/brand/logo.png'

        }
        ]
    res.json(data)
}

module.exports = ListOfPeople;
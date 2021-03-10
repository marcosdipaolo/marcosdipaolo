const ProfileData = () => {
    const profileData = [
        [
            {
                key: 'first name',
                value: 'Marcos'
            }, {
                key: 'last name',
                value: 'Di Paolo'
            }, {
                key: 'age',
                value: '46 years'
            }, {
                key: 'nationality',
                value: 'Argentine'
            }, {
                key: 'freelance',
                value: 'Available'
            }
        ], [
            {
                key: 'address',
                value: 'Buenos Aires'
            }, {
                key: 'phone',
                value: '+5491141451155'
            }, {
                key: 'email',
                value: '{skype}@gmail.com'
            }, {
                key: 'skype',
                value: 'marcosdipaolo'
            }, {
                key: 'languages',
                value: 'Spanish, English'
            }
        ]
    ]
    return (
        <div className="row profile-data">
            <div className="col-6">
                <ul className="pl-0">
                    {
                        profileData[0].map(data => <li className="mb-20" key={data.value}>
                            <span className="text-wrap key text-capitalize">{data.key}: </span>
                            <span className="d-block d-sm-inline-block d-lg-block d-xl-inline-block text-wrap value fw-600">{data.value}</span>
                        </li>
                        )
                    }
                </ul>
            </div>
            <div className="col-6">
                <ul className="pl-0">
                    {
                        profileData[1].map(data => <li className="mb-20" key={data.value}>
                            <span className="text-wrap key text-capitalize">{data.key}: </span>
                            <span className="d-block d-sm-inline-block d-lg-block d-xl-inline-block text-wrap value fw-600">{data.value}</span>
                        </li>
                        )
                    }
                </ul>
            </div>
            <div className="col-12 mt-10">
                <a href="/cv-en.pdf" download target="_self" className="mdp-btn">download cv</a>
            </div>
        </div>
    )
}

export default ProfileData
const getAge = (birth) => {
  const today = new Date();
  const birthDate = new Date(birth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export default (t) => ({
  firstColumn: [
    {
      key: t('pages.about.firstName'),
      value: 'Marcos',
    }, {
      key: t('pages.about.lastName'),
      value: 'Di Paolo',
    }, {
      key: t('pages.about.age'),
      value: `${getAge('1974-06-20')} ${t('pages.about.years')}`,
    }, {
      key: t('pages.about.nationality'),
      value: t('pages.about.argentine'),
    }, {
      key: t('pages.about.freelance'),
      value: t('pages.about.available'),
    },
  ],
  secondColumn: [
    {
      key: t('pages.about.address'),
      value: 'Buenos Aires',
    }, {
      key: t('pages.about.phone'),
      value: '+5491141451155',
    }, {
      key: t('pages.about.email'),
      value: `{${t('pages.about.mySkypeUser')}}@gmail.com`,
    }, {
      key: t('pages.about.skype'),
      value: 'marcosdipaolo',
    }, {
      key: t('pages.about.languages'),
      value: 'Spanish, English',
    },
  ],
});

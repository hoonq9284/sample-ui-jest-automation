module.exports = {
    main: {
        searchBox: '//*[@class="search_input"]',
        searchButton: '//*[@class="btn_search"]',
        loginSection: '//*[@aria-label="로그인 정보"]',
        mapIcon: '//*[@class="service_icon type_map"]',
        mapPageLogo: '//*[@class="logo_box"]'
    },
    weather: {
        weatherLinkText: '//*[@href="https://weather.naver.com/"]',
        weatherLogo: '//*[@class="logo_area"]',
        compareForecastsText: '//*[text()="예보비교"]',
        findDustText: '//*[text()="미세먼지"]',
        mapText: '//*[text()="지도"]',
        videoText: '//*[text()="영상"]',
        weatherReports: '//*[text()="기상특보"]'
    }
};
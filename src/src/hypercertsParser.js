'use strict'
var exports = module.exports = {}

const defaultValue = true

const websitesData = require('./newsSiteSettings.js')

/*
const homePageDefaultValues = {
  newsElementClass: 'sdc-news-story-grid__card',
  newsTitleClass: 'sdc-news-story-grid__link',
  specificArticleElement: 'sdc-news-article-header__headline'
}

const newsPageDefaultValues = {
  newsTitleClass: 'sdc-news-article-header__standfirst'
}

/*
const homePageDefaultValues = {
  newsElementClass: 'blog-article',
  newsTitleClass: 'article-title',
  specificArticleElement: 'main-content'
}

const newsPageDefaultValues = {
  newsTitleClass: 'main-content'
}
*/
const values = websitesData.getWebsiteSettings()
const homePageDefaultValues = values.homePage
const newsPageDefaultValues = values.newsPage

exports.getNewsItems = function (documentObj) {
  return documentObj.getElementsByClassName(homePageDefaultValues.newsElementClass)
}

/*
exports.getTitleElement = function (parent) {
  if (window.location.href.toString().includes('campus-community')) {
    console.log('Getting By Tag nameeee')
    return parent.getElementsByClassName('main-content')[0].getElementsByClassName('container')[0].getElementsByClassName('row')[0].getElementsByTagName('h1')[0].innerHTML
  } else {
    return parent.getElementsByClassName(homePageDefaultValues.newsTitleClass)[0].innerText
  }
}
*/
exports.getTitleElement = function (parent) {
  if (parent.getElementsByClassName(homePageDefaultValues.specificArticleElement).length > 0) {
    console.log('Detected: News-Page')
    // return window.location.href
    return newsPageDefaultValues.getTitle()

    // return parent.getElementsByClassName(newsPageDefaultValues.newsTitleClass)[0].innerText
  } else {
    console.log('Detected: Home-Page')
    // return parent.getElementsByClassName(homePageDefaultValues.newsTitleClass)[0].innerText
    // return parent.getElementsByClassName(homePageDefaultValues.newsTitleClass)[0].href
    return homePageDefaultValues.getTitle(parent)
  }
}

exports.cleanTitle = function (title) {
  return title.replace(/\W/g, '').toLowerCase()
}

/*

document.getElementsByClassName("main-content")[0].getElementsByClassName("container")[0].getElementsByClassName("row")[0].getElementsByTagName("h1")[0].innerHTML

window.location.href.toString().includes("campus-community")
*/

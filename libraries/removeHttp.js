module.exports = (url) => {
    let httpString = url;
    re = /https?:/ 
    return httpString.replace(re, '');
}

// module.exports = removeHttp;

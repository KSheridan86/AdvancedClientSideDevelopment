var express = require('express');
var xml = require('xml');
var o2x = require('object-to-xml');

var router = express.Router();

var authors = {
  authors: [
    {
      author: [
        { name: "Russell Norvig" },
        { title: "AI a Modern Approach" },
        { year: 2015 }
      ]
    },
    {
      author: [
        { name: "Michael Sipser" },
        { title: "Introduction to the Theory of Computation" },
        { year: 1997 }
      ]
    },
    {
      author: [
        { name: "Tom Mitchell" },
        { title: "Machine Learing" },
        { year: 1999 }
      ]
    },
    {
      author: [
        { name: "Jim Albert" },
        { title: "Probability and Bayesian Modeling" },
        { year: 2019 }
      ]
    },
    {
      author: [
        { name: "Jim Albert" },
        { title: "Bayesian Computation with R" },
        { year: 2007 }
      ]
    },
    {
      author: [
        { name: "Trevor Hastie" },
        { title: "The Elements of Statistical Learning" },
        { year: 2009 }
      ]
    }
  ]
}

router.get('/', function(req, res, next) {
  var data= authors
  if(req.query.author) {
    data = {
      authors: authors.authors.filter(author => author.author[0].name.includes(req.query.author))
    }
  }

  if(req.query.title) {
    data = {
      authors: authors.authors.filter(author => author.author[1].title.includes(req.query.title))
    }
  }

  res.set('Content-Type', 'text/xml');
  res.send(xml(data));

});


module.exports = router;

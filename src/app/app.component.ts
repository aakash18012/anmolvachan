import {Component, OnInit} from '@angular/core';
import { interval } from 'rxjs';
import {MatSnackBar} from '@angular/material';
import {SwPush, SwUpdate} from '@angular/service-worker';
import * as $ from 'jquery';
import {AuthenticationService} from './services/authentication.service';
import {QuoteService} from './services/quote.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  lifeQuotes: any;
  bookQuotes: any;
  startupQuotes: any;
  inspirationalQuotes: any;
  relationshipQuotes: any;
  movieQuotes: any;
  successQuotes: any;
  bhagvatgeetaQuotes: any;
  constructor(private swUpdate: SwUpdate, private swPush: SwPush, private snackbar: MatSnackBar,
                public authentication: AuthenticationService, private quoteService: QuoteService) {
    this.swUpdate.available.subscribe(evt => {
    this.swUpdate.checkForUpdate().then(() => {

        const snack = this.snackbar.open('Update Available', 'Reload', {
          duration: 200000,
          panelClass: ['blue-snackbar']
        });
        snack
          .onAction()
          .subscribe(() => {
            window.location.reload();
          });

        setTimeout(() => {
          snack.dismiss();
        }, 20000);
      });
    });


  }
  // Quotes Containers
  getData(quoteType) {
    this.quoteService
      .getQuotes(quoteType)
      .subscribe((data) => {
        const resultsType = data['type'];
        switch (resultsType) {
          case 'bhagvatgeeta':
            this.bhagvatgeetaQuotes = data['results'];
            break;
          case 'life':
            this.lifeQuotes = data['results'];
            break;
          case 'success':
          this.successQuotes = data['results'];
            break;
          case 'inspirational':
           this.inspirationalQuotes = data['results'];
            break;
          case 'relationship':
           this.relationshipQuotes = data['results'];
            break;
          case 'startup':
            this.startupQuotes = data['results'];
            break;
          case 'book':
           this.bookQuotes = data['results'];
            break;
          case 'movie':
            this.movieQuotes = data['results'];
            break;
        }
      });
  }
  ngOnInit() {
    this.getData('bhagvatgeeta');
    this.getData('life');
    this.getData('success');
    this.getData('inspirational');
    this.getData('relationship');
    this.getData('startup');
    this.getData('book');
    this.getData('movie');
    const self = this;
    $(document).ready(function () {

      // Variables

      let  x = self.startupQuotes;
      let  i = 0;
      let  m;
      let  k;

      // Functions

      function firstQuote () {
        $('.quote').html(x[0].quote);
        $('.author').html('- ' + x[0].author);
        i = 1;
      }

      function nextQuote () {
        $('.quote').html(x[i].quote);
        $('.author').html('- ' + x[i].author);
      }

      function previousQuote () {
        $('.quote').html(x[m].quote);
        $('.author').html('- ' + x[m].author);

      }

      function activeState () {
        $('.nav-bar-btn-span').removeClass('black-bottom-border');
        $('#nav-bar-btn-' + k).addClass('black-bottom-border');
      }

      // Navigation

      $('#nav-bar-books, #home-books').click(function () {
        x = self.bookQuotes;
        k = 'books';
        $('#page').attr('class', 'background-style-' + k);
        activeState();
      });

      $('#nav-bar-relationships, #home-relationships').click(function () {
        x = self.relationshipQuotes;
        k = 'relationships';
        $('#page').attr('class', 'background-style-' + k);
        activeState();
      });

      $('#nav-bar-inspirational, #home-inspirational').click(function () {
        x = self.inspirationalQuotes;
        k = 'inspirational';
        $('#page').attr('class', 'background-style-' + k);
        activeState();
      });

      $('#nav-bar-success, #home-success').click(function () {
        x = self.successQuotes;
        k = 'success';
        $('#page').attr('class', 'background-style-' + k);
        activeState();
      });

      $('#nav-bar-movies, #home-movies').click(function () {
        x = self.movieQuotes;
        k = 'movies';

        $('#page').attr('class', 'background-style-' + k);
        activeState();
      });

      $('#nav-bar-life, #home-life').click(function () {
        x = self.lifeQuotes;
        k = 'life';
        $('#page').attr('class', 'background-style-' + k);
        activeState();
      });

      $('#nav-bar-bhagvatgeeta, #home-bhagvatgeeta').click(function () {
        x = self.bhagvatgeetaQuotes;
        k = 'bhagvatgeeta';
        $('#page').attr('class', 'background-style-' + k);
        activeState();
      });

      $('#nav-bar-startups, #home-startups').click(function () {
        x = self.startupQuotes;
        k = 'startups';
        $('#page').attr('class', 'background-style-' + k);
        activeState();
      });

      $('.nav-bar-btn,#home-books').click(function () {
        firstQuote();
      });

      $('#nav-bar-home').click(function () {
        $('#page').slideUp('slow');
        $('.home').slideDown('slow');
      });

      $('.title').click(function () {
        $('#page').slideDown('slow');
        $('.home').slideUp('slow');
        firstQuote();
      });


      // Buttons

      $('#next-quote').click(function() {
        nextQuote();
        i++;
        if (i >= x.length) {
          i = 0;
        }
      });

      $('#previous-quote').click(function () {
        if (i <= 0) {
          i = x.length;
        }
        m = i - 2;
        if (m <= -1) {
          m = x.length - 1;
        }
        previousQuote();
        i--;
      });

      // Tweet Button

    $('.btn-tweet').click(function () {
        const width: any = 575,
          height: any = 400,
          left: any   = ($(window).width()  - width)  / 2,
          top: any   = ($(window).height() - height) / 2,
          sum: any = x[i - 1].quote,
          auth: any = x[i - 1].author,
          url: any  = 'https://twitter.com/share?text=' + sum,

          opts: any   = 'status=1' +
            ',width='  + width  +
            ',height=' + height +
            ',top='    + top    +
            ',left='   + left;

        window.open(url, 'twitter', opts);
      });

    });

  }




}

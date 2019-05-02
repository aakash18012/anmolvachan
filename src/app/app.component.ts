import {Component, OnInit} from '@angular/core';
import { interval } from 'rxjs';
import {MatSnackBar} from '@angular/material';
import {SwPush, SwUpdate} from '@angular/service-worker';
import * as $ from 'jquery';
import {AuthenticationService} from './services/authentication.service';
import {RecipedataService} from './services/recipedata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private swUpdate: SwUpdate, private swPush: SwPush, private snackbar: MatSnackBar, public authentication: AuthenticationService, private recipeservice: RecipedataService) {
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

  startupQuotes: any = [
    {
      quote: 'If you make the Internet, live on the internet.',
      author: 'Matthew Mullenweg, WordPress'
    },

    {
      quote: 'Find something you love and do it better than everyone else.',
      author: 'Gurbaksh Chahal, RadiumOne'
    },

    {
      quote: 'I find it best to dive right in and learn the hard way.',
      author: 'Pete Cashmore, Mashable'
    },

    {
      quote: 'If you do the things that are easier first, then you can actually make a lot of progress.',
      author: 'Mark Zuckerberg, Facebook'
    },

    {
      quote: 'A hard thing is done by figuring out how to start.',
      author: 'Rand Fishkin, SEOmoz'
    },

    {
      quote: 'To any entrepreneur: if you want to do it, do it now. If you don’t, you’re going to regret it.',
      author: 'Catherine Cook, MyYearbook'
    },

    {
      quote: 'Everything started as nothing.',
      author: 'Ben Weissenstein, Grand Slam Garage Sales'
    },

    {
      quote: 'I don’t have big ideas. I sometimes have small ideas, which seem to work out.',
      author: 'Matt Mullenweg, WordPress'
    },

    {
      quote: 'I think I was very naïve early on, but that also meant I didn’t know what couldn’t be done.',
      author: 'Matt Mickiewicz, 99 Designs'
    },

    {
      quote: 'It’s not about how many years of experience you have. It’s about the quality of your years of experience.',
      author: 'Jacob Cass, Logo of the Day'
    },

    {
      quote: 'Every single person I know who is successful at what they do is successful because they love doing it.',
      author: 'Joe Penna, Mystery Guitar Man'
    },

    {
      quote: 'My number one piece of advice is: you should learn how to program.',
      author: 'Mark Zuckerberg, Facebook'
    },

    {
      quote: 'Focusing on one thing and doing it really, really well can get you very far.',
      author: 'Kevin Systrom, Instagram'
    },

    {
      quote: 'Success is defined in units of fun. It’s all about being happy.',
      author: 'Jake Nickell, Threadless'
    },
    {
      quote: 'Solving specific problems is what drives me. I am not interested in having a career. I never have been.',
      author: 'Sean Parker, Napster'
    },

    {
      quote: 'I’m here to build something for the long-term. Anything else is a distraction.',
      author: 'Mark Zuckerberg, Facebook'
    },

    {
      quote: 'One can get anything if he is willing to help enough others get what they want.',
      author: 'Zig Ziglar, Motivational Speaker'
    },

    {
      quote: 'Brilliant thinking is rare, but courage is in even shorter supply than genius.',
      author: 'Peter Thiel, Zero to One'
    },

    {
      quote: 'All failed companies are the same: they failed to escape competition.',
      author: 'Peter Thiel, Zero to One'
    },

    {
      quote: 'Don\'t worry about failure; you only have to be right once.',
      author: 'Drew Houston'
    },

    {
      quote: 'As long as your going to be thinking anyway, think big.',
      author: 'Donald Trump'
    },

    {
      quote: 'Chase the vision, not the money; the money will end up following you.',
      author: 'Tony Hsieh'
    },

    {
      quote: 'Always deliver more than expected.',
      author: 'Larry Page, Co-Founder, Google'
    },

    {
      quote: 'If you’re not a risk taker, you should get the hell out of business.',
      author: 'Ray Kroc, McDonald’s Founder'
    },

    {
      quote: 'Ideas are commodity. Execution of them is not.',
      author: 'Michael Dell, Dell Computers'
    },

  ];

  bookQuotes: any  = [

    {
      quote: 'There are five billion people living on this planet. But you fall in' +
      ' love with one particular person, and you won\'t swap her for any other.',
      author: 'Jostein Gaarder, The Solitaire Mystery'
    },

    {
      quote: 'People generally see what they look for and hear what they listen for.',
      author: 'Harper Lee, To Kill a Mockingbird'
    },

    {
      quote: 'You don\'t get to choose if you get hurt in this world...but you do have some say in who hurts you.',
      author: 'John Green, The Fault In Our Stars'
    },

    {
      quote: 'The world is not a wish-granting factory',
      author: 'John Green, The Fault In Our Stars'
    },

    {
      quote: 'Destroying things is much easier than making them.',
      author: 'Suzanne Collins, The Hunger Games'
    },

    {
      quote: 'To be successful you need friends and to be very successful you need enemies.',
      author: 'Sidney Sheldon, The Other Side of Midnight'
    },

    {
      quote: 'Life is like a novel. It\'s filled with suspense. You have no idea what is going to happen until you turn the page.',
      author: 'Sidney Sheldon'
    },

    {
      quote: 'It\'s much better to do good in a way that no one knows anything about it/',
      author: 'Leo Tolstoy, Anna Karenina'
    },

    {
      quote: 'There comes a time when you have to choose between turning the page and closing the book.',
      author: 'Josh Jameson'
    },

    {
      quote: 'I think of life as a good book. The further you get into it, the more it begins to make sense.',
      author: 'Harold Kushner'
    },

    {
      quote: 'If you only read the books that everyone else is reading, you can only think what everyone else is thinking.',
      author: 'Haruki Murakami'
    },

    {
      quote: 'There are many little ways to enlarge your child’s world. Love of books is the best of all.',
      author: 'Jacqueline Kennedy Onassis'
    },

    {
      quote: 'Great books help you understand, and they help you feel understood.',
      author: 'John Green'
    },

    {
      quote: 'A book is a version of the world. If you do not like it, ignore it or offer your own version in return.',
      author: 'Salman Rushdie'
    },

    {
      quote: 'Keep reading books, but remember that a book is only a book, and you should learn to think for yourself.',
      author: 'Maxim Gorky'
    },

    {
      quote: 'There are perhaps no days of our childhood we lived so fully as those we spent with a favorite book.',
      author: 'Marcel Proust'
    },

    {
      quote: 'A book is the only place in which you can examine a fragile thought without breaking it.',
      author: 'Edward P. Morgan'
    },

    {
      quote: 'If one cannot enjoy reading a book over and over again, there is no use in reading it at all.',
      author: 'Oscar Wilde'
    },

    {
      quote: 'Read the best books first, or you may not have a chance to read them at all.',
      author: 'Henry David Thoreau'
    },

    {
      quote: 'Make it a rule never to give a child a book you would not read yourself.',
      author: 'George Bernard Shaw'
    },

    {
      quote: 'I can’t imagine a man really enjoying a book and reading it only once.',
      author: 'C.S. Lewis'
    },

    {
      quote: 'One always has a better book in one’s mind than one can manage to get onto paper.',
      author: 'Michael Cunningham'
    },

    {
      quote: 'There are worse crimes than burning books. One of them is not reading them.',
      author: 'Joseph Brodsky'
    },

    {
      quote: 'You know you’ve read a good book when you turn the last page and feel a little as if you have lost a friend.',
      author: 'Paul Sweeney'
    },

    {
      quote: 'A good book has no ending.',
      author: 'R.D. Cumming'
    },


  ];

  inspirationalQuotes: any  = [
    {
      quote: 'If you want to go fast, go alone. If you want to go far, go together.',
      author: 'African proverb'
    },
    {
      quote: 'Patience can cook a stone.',
      author: 'African proverb'
    },
    {
      quote: 'The fool speaks, the wise man listens.',
      author: 'Ethiopian proverb'
    },
    {
      quote: 'However long the night, the dawn will break.',
      author: 'African proverb'
    },

    {
      quote: 'He who eats another mans food will have his own food eaten by others.',
      author: 'Swahili proverb'
    },

    {
      quote: 'Water is colourless and tasteless but you can live on it longer than eating food.',
      author: 'African proverb'
    },
    {
      quote: 'A man who makes trouble for others is also making trouble for himself.',
      author: 'Chinua Achebe'
    },

    {
      quote: 'If you think you are too small to make a difference, you haven’t spent a night with a mosquito.',
      author: 'African proverb'
    },

    {
      quote: 'Education is the most powerful weapon which you can use to change the world.',
      author: 'Nelson Mandela'
    },

    {
      quote: 'If you are filled with pride, then you will have no room for wisdom.',
      author: 'African proverb'
    },

    {
      quote: 'Do not try to fight a lion if you are not one yourself.',
      author: 'African proverb'
    },

    {
      quote: 'A good thing sells itself, a bad one advertises itself.',
      author: 'African proverb'
    },

    {
      quote: 'It is better to be loved than feared.',
      author: 'African proverb'
    },

    {
      quote: 'Whether the knife falls on the melon or the melon on the knife, the melon suffers.',
      author: 'African proverb'
    },

    {
      quote: 'Not to know is bad. Not to wish to know is worse.',
      author: 'African proverb'
    },

    {
      quote: 'Ears that do not listen to advice, accompany the head when it is chopped off.',
      author: 'African proverb'
    },

    {
      quote: 'A happy man marries the girl he loves, but a happier man loves the girl he marries.',
      author: 'African proverb'
    },

    {
      quote: 'The wise create proverbs for fools to learn, not to repeat.',
      author: 'African proverb'
    },

    {
      quote: 'Brothers love each other when they are equally rich.',
      author: 'African proverb'
    },

    {
      quote: 'He who earns calamity, eats it with his family.',
      author: 'African proverb'
    },

    {
      quote: 'When the mouse laughs at the cat, there is a hole nearby',
      author: 'African proverb'
    },

    {
      quote: 'Knowledge without wisdom is like water in the sand.',
      author: 'African proverb'
    },

    {
      quote: 'When brothers fight to the death, a stranger inherits their father’s estate.',
      author: 'African proverb'
    },

    {
      quote: 'To get lost is to learn the way.',
      author: 'African proverb'
    },


  ];

/*  lifeQuotes: any  = [

    {
      quote: 'Don\'t cry because it\'s over, smile because it happened.',
      author: 'Dr. Seuss'
    },

    {
      quote: 'You only live once, but if you do it right, once is enough.',
      author: 'Mae West'
    },

    {
      quote: 'To live is the rarest thing in the world. Most people exist, that is all.',
      author: 'Oscar Wilde'
    },

    {
      quote: 'It is better to be hated for what you are than to be loved for what you are not.',
      author: 'Andre Gide'
    },

    {
      quote: 'In three words I can sum up everything I\'ve learned about life: it goes on.',
      author: 'Robert Frost'
    },

    {
      quote: 'On most days, the biggest thing you can do is a small act of kindness, decency or love.',
      author: 'Cory Booker'
    },

    {
      quote: 'In the end, it\'s not the years in your life that count. It\'s the life in your years.',
      author: 'Abraham Lincoln'
    },

    {
      quote: 'We do not remember days, we remember moments.',
      author: 'Cesare Pavese'
    },

    {
      quote: 'Life\'s most persistent and urgent question is, \'What are you doing for others?',
      author: 'Martin Luther King, Jr.'
    },

    {
      quote: 'Life is really simple, but we insist on making it complicated.',
      author: 'Confucius'
    },

    {
      quote: 'Beware the barrenness of a busy life.',
      author: 'Socrates'
    },

    {
      quote: 'You have enemies? Good. That means you\'ve stood up for something, sometime in your life.',
      author: 'Winston Churchill'
    },

    {
      quote: 'Growth is the only evidence of life.',
      author: 'John Henry Newman'
    },

    {
      quote: 'Sometimes the questions are complicated and the answers are simple.',
      author: 'Dr. Seuss'
    },

    {
      quote: 'Things change. And friends leave. Life doesn\'t stop for anybody.',
      author: 'Stephen Chbosky'
    },

    {
      quote: 'The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.',
      author: 'Mark Twain'
    },

    {
      quote: 'We are what we pretend to be, so we must be careful about what we pretend to be.',
      author: 'Kurt Vonnegut'
    },

    {
      quote: 'The one you love and the one who loves you are never, ever the same person.',
      author: 'Chuck Palahniuk'
    },

    {
      quote: 'If you don\'t know where you\'re going, any road\'ll take you there.',
      author: 'George Harrison'
    },

    {
      quote: 'A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.',
      author: 'George Bernard Shaw'
    },

    {
      quote: 'The most important thing is to enjoy your life—to be happy—it\'s all that matters.',
      author: 'Audrey Hepburn'
    },

    {
      quote: 'Life is a book and there are a thousand pages I have not yet read.',
      author: 'Cassandra Clare'
    },

    {
      quote: 'Nobody realizes that some people expend tremendous energy merely to be normal',
      author: 'Albert Camus'
    },

    {
      quote: 'If you love somebody, let them go, for if they return, they were always yours. If they don\'t, they never were.',
      author: 'Kahlil Gibran'
    },

    {
      quote: 'Do I not destroy my enemies when I make them my friends?',
      author: 'Abraham Lincoln'
    },


  ];*/
  lifeQuotes: any;
  relationshipQuotes: any  = [
    {
      quote: 'रिश्ता उस किताब की तरह होता है, जिसे लिखने में सालों लग जाते हैं. लेकिन इस किताब के जलने में कुछ मिनट का हीं समय लगता है.',
      author: 'Anonymous'
    },
    {
      quote: 'रिश्तों की डोरी तब कमजोर होती है जब इंसान ग़लतफहमी में पैदा होने वाले सवालों का जवाब खुद ही बना लेता है',
      author: 'Anonymous'
    },
    {
      quote: 'किसी भी रिश्ते को तोड़नेसे पहले एक बार अपने आप से पूछ जरूर लेना कि आज तक उस रिश्ते को निभा क्यों रहे थे ।',
      author: 'Anonymous'
    },
    {
      quote: 'रिश्ते और पौधे दोनों एक जैसे होते है, लगाकर भूल जाओ तो दोनों ही सूख जाते है।',
      author: 'Anonymous'
    },
    {
      quote: 'रिश्तों की खूबसूरती एक-दूसरे की बात बर्दाश्त करने में है। खुद जैसा इंसान तलाश करोगे तो अकेले रह जाओगे।',
      author: 'Anonymous'
    },
    {
      quote: 'शीशा और रिश्ता दोनों ही बड़े नाज़ुक होते हैं, दोनों में सिर्फ एक ही फर्क है, ' +
      'शीशा ‘गलती’ से टूट जाता है, और रिश्ता ‘गलतफहमियों’ से',
      author: 'Anonymous'
    },
    {
      quote: 'नाखून बढ़ने पर नाखून ही काटे जाते हैं, उँगलियाँ नहीं। इसी तरह रिश्ते में दरार आये तो दरार को मिटाइए, रिश्ते को नही।',
      author: 'Anonymous'
    },


    {
      quote: 'तुम पानी जैसे बनो जो अपना रास्ता खुद बनाता है, पत्थर जैसे न बनो जो दूसरों का रास्ता भी रोक लेता है ।',
      author: 'Anonymous'
    },
    {
      quote: 'When you stop expecting people to be perfect, you can like them for who they are.',
      author: 'Donald Miller'
    },

    {
      quote: 'No road is long with good company.',
      author: 'Turkish Proverb'
    },

    {
      quote: 'Shared joy is a double joy; shared sorrow is half a sorrow.',
      author: 'Swedish Proverb'
    },

    {
      quote: 'We are afraid to care too much, for fear that the other person does not care at all.',
      author: 'Eleanor Roosevelt'
    },

    {
      quote: 'Lots of people want to ride with you in the limo, ' +
      'but what you want is someone who will take the bus with you when the limo breaks down.',
      author: 'Oprah Winfrey'
    },

    {
      quote: 'What love we’ve given, we’ll have forever. What love we fail to give, will be lost for all eternity',
      author: 'Leo Buscaglia'
    },

    {
      quote: 'Life is partly what we make it, and partly what it is made by the friends we choose.',
      author: 'Tennessee Williams'
    },

    {
      quote: 'Everything that irritates us about others can lead us to an understanding of ourselves.',
      author: 'Carl Jung'
    },

    {
      quote: 'Intimacy is the capacity to be rather weird with someone – and finding that that’s ok with them.',
      author: 'Alain de Botton'
    },

    {
      quote: 'An eye for eye only ends up making the whole world blind.',
      author: 'Mahatma Gandhi'
    },

    {
      quote: 'What you do not want done to yourself, do not do to others.',
      author: 'Confucius'
    },

    {
      quote: 'Having someone wonder where you are when you don’t come home at night is a very old human need.',
      author: 'Margaret Mead'
    },

    {
      quote: 'I like to listen. I have learned a great deal from listening carefully. Most people never listen.',
      author: 'Ernest Hemingway'
    },

    {
      quote: 'Forgiveness does not change the past, but it does enlarge the future.',
      author: 'Paul Boose'
    },

    {
      quote: 'If you live to be 100, I hope I live to be 100 minus 1 day, so I never have to live without you.',
      author: 'Winnie the Pooh'
    },

    {
      quote: 'If you would be loved, love, and be loveable.',
      author: 'Benjamin Franklin'
    },

    {
      quote: 'People are lonely because they build walls instead of bridges.',
      author: 'Joseph F. Newton'
    },

    {
      quote: 'Assumptions are the termites of relationships.',
      author: 'Henry Winkler'
    },

    {
      quote: 'Love is when you meet someone who tells you something new about yourself.',
      author: 'Andre Breton'
    },

    {
      quote: 'A woman knows the face of the man she loves as a sailor knows the open sea.',
      author: 'Honore de Balzac'
    },

    {
      quote: 'When a woman is talking to you, listen to what she says with her eyes.',
      author: 'Victor Hugo'
    },

    {
      quote: 'We can improve our relationships with others by leaps and bounds if we become encouragers instead of critics.',
      author: 'Joyce Meyer'
    },

    {
      quote: 'Don’t smother each other. No one can grow in the shade.',
      author: 'Leo Buscaglia'
    },

    {
      quote: 'The royal road to a man’s heart is to talk to him about the things he treasures most.',
      author: 'Dale Carnegie'
    },

    {
      quote: 'When dealing with people, remember you are not dealing with creatures of logic, but creatures of emotion.',
      author: 'Dale Carnegie'
    },


  ];

  movieQuotes: any  = [

    {
      quote: 'May the Force be with you',
      author: 'Star Wars, 1977'
    },

    {
      quote: 'There’s no place like home',
      author: 'The Wizard of Oz, 1939'
    },

    {
      quote: 'The first rule of Fight Club is you do not talk about Fight Club',
      author: 'Fight Club, 1999'
    },

    {
      quote: 'Keep your friends close, but your enemies closer.',
      author: 'The Godfather Part II, 1974'
    },

    {
      quote: 'They may take our lives, but they\'ll never take our freedom!',
      author: 'Braveheart, 1995'
    },

    {
      quote: 'The greatest trick the devil ever pulled was convincing the world he didn\'t exist.',
      author: 'The Usual Suspects, 1995'
    },

    {
      quote: 'Hello. My name is Inigo Montoya. You killed my father. Prepare to die.',
      author: 'The Princess Bride, 1987'
    },

    {
      quote: 'Get busy living, or get busy dying.',
      author: 'The Shawshank Redemption, 1994'
    },

    {
      quote: 'I\'ll be back.',
      author: 'The Terminator, 1984'
    },

    {
      quote: 'I\'m also just a girl standing in front of a boy asking him to love her.',
      author: 'Notting Hill, 1999'
    },

    {
      quote: 'To call you stupid would be an insult to stupid people',
      author: 'A Fish Called Wanda, 1988'
    },

    {
      quote: 'Well, what if there is no tomorrow? There wasn\'t one today.',
      author: 'Groundhog Day, 1993'
    },

    {
      quote: 'You\'re not an asshole, Mark. You\'re just trying so hard to be.',
      author: 'The Social Network, 2010'
    },

    {
      quote: 'You\'re gonna need a bigger boat.',
      author: 'Jaws, 1975'
    },

    {
      quote: 'That’s what makes me sad: Life is so different from books.',
      author: 'Pierrot Le Fou, 1965'
    },

    {
      quote: 'Say what you like about the Nazis... they had style.',
      author: 'Outpost, 2007'
    },

    {
      quote: 'Old age. It\'s the only disease, Mr. Thompson, that you don\'t look forward to being cured of.',
      author: 'Citizen Kane, 1941'
    },

    {
      quote: 'Nobody\'s perfect.',
      author: 'Some Like It Hot, 1959'
    },

    {
      quote: 'Life is a box of chocolates, Forrest. You never know what you\'re gonna get.',
      author: 'Forrest Gump, 1994'
    },

    {
      quote: 'Louis, I think this is the beginning of a beautiful friendship.',
      author: 'Casablanca, 1942'
    },

    {
      quote: 'Man who catch fly with chopstick accomplish anything.',
      author: 'The Karate Kid, 1984'
    },

    {
      quote: 'In case I don\'t see ya, good afternoon, good evening, and good night!\'',
      author: 'The Truman Show, 1998'
    },

    {
      quote: 'I\'ll have what she\'s having.',
      author: 'When Harry Met Sally, 1989'
    },

    {
      quote: 'I\'m gonna make him an offer he can\'t refuse.',
      author: 'The Godfather, 1972'
    },

    {
      quote: 'It’s a fool looks for logic in the chambers of the human heart.',
      author: 'Where Art Thou?, 2000'
    },


  ];

  successQuotes: any  = [

    {
      quote: 'It’s hard to beat a person who never gives up.',
      author: 'Babe Ruth, Baseball Legend'
    },

    {
      quote: 'If you even dream of beating me, you\'d better wake up and apologize',
      author: 'Muhammad Ali'
    },

    {
      quote: 'If you only ever give 90% in training then you will only ever give 90% when it matters.',
      author: 'Michael Owen'
    },

    {
      quote: 'If you are afraid of failure you don’t deserve to be successful!',
      author: 'Charles Barkley'
    },

    {
      quote: 'The best motivation always comes from within.',
      author: 'Michael Johnson'
    },

    {
      quote: 'The more I practice, the luckier I get.',
      author: 'Gary Player'
    },

    {
      quote: 'One man practicing sportsmanship is far better than 50 preaching it.',
      author: 'Knute Rockne'
    },

    {
      quote: 'Winning is not everything – but making the effort to win is.',
      author: 'Vince Lombardi'
    },

    {
      quote: 'A good coach will make his players see what they can be rather than what they are.',
      author: 'Ara Paraeghian'
    },

    {
      quote: 'You miss 100 percent of the shots you don’t take',
      author: 'Wayne Gretzky'
    },

    {
      quote: 'Everybody has a plan until they get punched in the face',
      author: 'Mike Tyson'
    },

    {
      quote: 'Most talented players don’t always succeed. Some don’t even make the team. It’s more what’s inside.',
      author: 'Brett Favre'
    },

    {
      quote: 'If you can’t outplay them, outwork them.',
      author: 'Ben Hogan'
    },

    {
      quote: 'It is not the size of a man but the size of his heart that matters.',
      author: 'Evander Holyfield'
    },

    {
      quote: 'You have to believe in yourself when no one else does - that makes you a winner right there.',
      author: 'Venus Williams'
    },

    {
      quote: 'I skate to where the puck is going to be, not where it has been.',
      author: 'Wayne Gretzy, Hockey Star'
    },

    {
      quote: 'One man can be a crucial ingredient on a team, but one man cannot make a team.',
      author: 'Kareem Abdul-Jabbar'
    },

    {
      quote: 'The more difficult the victory, the greater the happiness in winning.',
      author: 'Pele'
    },

    {
      quote: 'Experience is a hard teacher because she gives the test first, the lesson afterward.',
      author: 'Vernon Law'
    },

    {
      quote: 'Today I will do what others won’t, so tomorrow I can accomplish what others can’t.',
      author: 'Jerry Rice'
    },

    {
      quote: 'I think it’s the mark of a great player to be confident in tough situations.',
      author: 'John McEnroe'
    },

    {
      quote: 'You’re never a loser until you quit trying.',
      author: 'Mike Dikta'
    },

    {
      quote: 'Sometimes the biggest problem is in your head. You’ve got to believe.',
      author: 'Jack Nicklaus'
    },


  ];

  bhagvatgeetaQuotes: any  = [

    {
      quote: 'Whatever happened, happened for the good. ' +
      'Whatever is happening, is happening for the good. Whatever will happen, will also happen for the good.',
      author: 'Krishna'
    },

    {
      quote: 'Change is the law of the universe. You can be a millionaire or a pauper in an instant.',
      author: 'Krishna '
    },

    {
      quote: 'Man is made by his belief. As he believes, so he is..',
      author: 'Krishna '
    },

    {
      quote: 'Lust, anger and greed are the three doors to self-destructive hell.',
      author: 'Krishna '
    },

    {
      quote: 'You came empty handed and you will leave empty-handed.',
      author: 'Krishna '
    },

    {
      quote: 'Our own mind acts like an Enemy if we do not control it.',
      author: 'Krishna '
    },
    {
      quote: 'Calmness, gentleness, silence, self-restraint, and purity: these are the disciplines of the mind.',
      author: 'Krishna '
    },
  ];
  getData() {
    this.recipeservice
      .getRecipes()
      .subscribe((data) => {
        localStorage.setItem('Bhagvatgeeta', JSON.stringify( data));
        this.lifeQuotes = data;
      });
  }
  ngOnInit() {
  this.getData();
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

//Handlebars.registerPartial("navbarPartial", $("#navbar-partial").html());

const handlebars = require('handlebars');


// set up your handlebars template
var navbar = '{{#each foo}}<p>{{this.bar}}</p>{{/each}}';

// compile the template
var template = handlebars.compile(navbar);

// call template as a function, passing in your data as the context
var outputString = template(navbar);




<nav class="navbar navbar-expand-md navbar-light fixed-top">
  <a class="navbar-brand" href="index.html" title="Go to Muve's homepage">MUVE</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="pages/moverInvite.html" title="Become a contractor">Mover Invite</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="pages/about.html" title="Learn about Muve">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="pages/blog.html" title="Check out our blog">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="pages/login.html" title="Login for contractors">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link free-quote" href="pages/jobSelection.html" title="Select a service and get your free quote">Free Instant Quote</a>
      </li>
    </ul>
  </div>
</nav>

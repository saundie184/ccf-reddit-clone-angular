angular.module('redditClone', [])
  .controller('FormController', [function() {
    var vm = this;
    vm.postsArray = [{
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      postText: 'Pinterest fixie master cleanse gochujang organic, leggings neutra kale chips hammock meditation polaroid banh mi selfies biodiesel blog. Fixie leggings freegan, meditation scenester sartorial fap vinyl. Gastropub kinfolk DIY portland, farm-to-table distillery pinterest. Fingerstache poutine VHS deep v forage hammock. 90\'s paleo ugh, hoodie trust fund biodiesel VHS semiotics wolf whatever.Echo park forage before they sold out, disrupt mlkshk migas yuccie venmo YOLO shoreditch quinoa bicycle rights pitchfork photo booth.Put a bird on it literally meditation fixie.',
      image: 'https://images.unsplash.com/photo-1414115880398-afebc3d95efc?crop=entropy&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450',
      vote: 0,
      date: new Date()
    }, {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      postText: 'Pinterest fixie master cleanse gochujang organic, leggings neutra kale chips hammock meditation polaroid banh mi selfies biodiesel blog. Fixie leggings freegan, meditation scenester sartorial fap vinyl. Gastropub kinfolk DIY portland, farm-to-table distillery pinterest. Fingerstache poutine VHS deep v forage hammock. 90\'s paleo ugh, hoodie trust fund biodiesel VHS semiotics wolf whatever.Echo park forage before they sold out, disrupt mlkshk migas yuccie venmo YOLO shoreditch quinoa bicycle rights pitchfork photo booth.Put a bird on it literally meditation fixie.',
      image: 'https://images.unsplash.com/photo-1433769778268-24b797c4fc9a?crop=entropy&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450',
      vote: 0,
      date: new Date()
    }];

    vm.title = '';
    vm.author = '';
    vm.postText = '';
    vm.image = '';

    // vm.date = new Date();


    //functions
    vm.submitPost = function submitPost() {
      if (vm.title) {
        vm.vote = 0;
        var postObj = {
          title: vm.title,
          author: vm.author,
          postText: vm.postText,
          image: vm.image,
          votes : vm.vote,
          date: new Date()
        };
        vm.postsArray.push(postObj);
      }
      vm.title = '';
      vm.author = '';
      vm.postText = '';
      vm.image = '';
    };

    //seed data
    var seed = {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      postText: 'Pinterest fixie master cleanse gochujang organic, leggings neutra kale chips hammock meditation polaroid banh mi selfies biodiesel blog. Fixie leggings freegan, meditation scenester sartorial fap vinyl. Gastropub kinfolk DIY portland, farm-to-table distillery pinterest. Fingerstache poutine VHS deep v forage hammock. 90\'s paleo ugh, hoodie trust fund biodiesel VHS semiotics wolf whatever.Echo park forage before they sold out, disrupt mlkshk migas yuccie venmo YOLO shoreditch quinoa bicycle rights pitchfork photo booth.Put a bird on it literally meditation fixie.',
      image: 'https://images.unsplash.com/photo-1414115880398-afebc3d95efc?crop=entropy&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450'
    };
  }]);

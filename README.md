# Chat App
- Demonstrating different ways to make chat applications using ruby/javascript

## RUN
```

$ bundle install
$ bundle exec rake db:migrate
$ bundle exec rake db:seed
$ rackup
```

## SPECS & NOTES
- ruby 2.3.0
- sintra
- postgres - production / sqlite3 - development
- deployed to heroku via production branch
- styles = Bootstrap/Jquery - CDN / Custom CSS

## Hosting
[Online Here](https://morning-island-89210.herokuapp.com/)

### Testing
- using rspec 
- can be used with guard & foreman

```
# Automated Testing
$ bundle exec guard

# Also setup with foreman
$ foreman start
```

### Manual Reload
- page refreshes when message is submited
- posts message, then refreshes page

### Live Reload
- javascript is constantly polling for new data and updating view

### Websockets
- uses websockets for chat(no page refresh or constant requests for server)
- look into keeping sockets open on heroku
- setup for https

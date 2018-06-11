# Live chat application (Slack clone)
Introducing myself to some new tools and concepts by building a live chat
that is a distant relative of IRC and Slack!

## Built with
* [Padrino](https://padrinorb.com/ 'Padrino')
* [React](https://reactjs.org/ 'React')

## Setup
* Clone the repo `git clone https://github.com/atsmith813/slack-clone`
* Install gems `bundle install`
* Seed the database with some dummy data `rake db:seed`
* Start the server `padrino s`
* Go to `127.0.0.1:3000` in your browser

## How it works
First, you choose a screen name

![alt text](https://hirealexsmith.com/chooseScreenName.png "Choose screen name")

Here you can join the list of available channels on the left

![alt text](https://hirealexsmith.com/chats.png "Join channels")

Or create a new channel

![alt text](https://hirealexsmith.com/newChannel.png "Create a new channel")


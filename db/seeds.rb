shell.say "Creating users..."
(0..9).each { |i| User.create(screen_name: "user_#{i}") }
new_users = User.all

shell.say "Creating channels..."
['reactjs', 'padrino', 'ruby', 'intrinio'].each { |channel| Channel.create(name: channel) }
channels = Channel.all

shell.say "Creating messages..."
messages = [
  "ReactJS is awesome!",
  "Intrinio is democratizing financial data",
  "This was a fun challenge",
  "Leave the gun, take the canoli",
  "Is this too cheesy?",
  "Data is the foundation of finance",
  "When it's restricted and expensive, innovation is squashed",
  "When it's available and affordable to the masses, there is no limit to the innovations they will build",
  "Anything is possible",
  "We envision a future where with the right tools, innovators will create a brand new future for the financial industry",
  "We can't wait to see what you build",
  "Intrinio exists because traditional financial data providers are slow, cumbersome mammoths",
  "The efficencies we have achieved in automated data collection and analysis are built to create an extinction event in the fintech space",
]
channels = Channel.all
channels.each do |channel|
  5.times {
    Message.create(
      user_id: new_users.pluck(:id).sample,
      channel_id: channel.id,
      content: messages.sample
    )
  }
end


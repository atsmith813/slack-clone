require 'spec_helper'

RSpec.describe Channel do
  let(:user) { FactoryBot.build(:user) }
  let(:message) { FactoryBot.build(:message) }
  let(:channel) { FactoryBot.build(:channel) }

  it 'can be created' do
    expect(channel).not_to be_nil
  end

  it 'new should not have any messages' do
    expect(channel.messages.size).to eq 0
  end

  it 'new should not have any users' do
    expect(channel.messages.size).to eq 0
  end

  it 'should have messages' do
    channel.messages.build(attributes_for(:message))
    expect(channel.messages.size).to eq 1
  end
end


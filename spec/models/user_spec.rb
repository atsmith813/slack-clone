require 'spec_helper'

RSpec.describe User do
  let(:user) { FactoryBot.build(:user) }
  let(:message) { FactoryBot.build(:message) }
  let(:channel) { FactoryBot.build(:channel) }

  it 'can be created' do
    expect(user).not_to be_nil
  end

  it 'new should not have any messages' do
    expect(user.messages.size).to eq 0
  end

  it 'new should not have any channels' do
    expect(user.channels.size).to eq 0
  end

  it 'should have messages' do
    user.messages.build(attributes_for(:message))
    expect(user.messages.size).to eq 1
  end

  it 'should have channels' do
    user.channels.build(attributes_for(:channel))
    expect(user.channels.size).to eq 1
  end
end


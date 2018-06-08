require 'spec_helper'

RSpec.describe Message do
  let(:user) { FactoryBot.build(:user) }
  let(:message) { FactoryBot.build(:message) }
  let(:channel) { FactoryBot.build(:channel) }

  it 'can be created' do
    expect(message).not_to be_nil
  end
end


# Tense Converter API - Ruby Gem

Tense Converter rewrites text into past or future tense. Submit any passage with your chosen target tense to receive the transformed wording and a flag indicating whether the text changed.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_tenseconverter'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_tenseconverter
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_tenseconverter'

# Initialize the client
client = APIVerve::Tenseconverter::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  text: "I am walking down the street, and I can see a dog",
  tense: "past"
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ text: "I am walking down the street, and I can see a dog", tense: "past" })
  puts response["data"]
rescue APIVerve::Tenseconverter::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Tenseconverter::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Tenseconverter::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "tense": "past",
    "result": "I was walking down the street, and I could see a dog",
    "changed": true
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/tenseconverter?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/tenseconverter?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/tenseconverter?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).

# Tense Converter API - PHP Package

Tense Converter rewrites text into past or future tense. Submit any passage with your chosen target tense to receive the transformed wording and a flag indicating whether the text changed.

## Installation

Install via Composer:

```bash
composer require apiverve/tenseconverter
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Tenseconverter\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'text' => 'I am walking down the street, and I can see a dog',
    'tense' => 'past'
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Tenseconverter\Client;
use APIVerve\Tenseconverter\Exceptions\APIException;
use APIVerve\Tenseconverter\Exceptions\ValidationException;

try {
    $response = $client->execute(['text' => 'I am walking down the street, and I can see a dog', 'tense' => 'past']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/tenseconverter?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/tenseconverter?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/tenseconverter?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).

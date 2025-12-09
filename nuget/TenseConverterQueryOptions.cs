using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.TenseConverter
{
    /// <summary>
    /// Query options for the Tense Converter API
    /// </summary>
    public class TenseConverterQueryOptions
    {
        /// <summary>
        /// The text to convert to past or future tense
        /// </summary>
        [JsonProperty("text")]
        public string Text { get; set; }

        /// <summary>
        /// The tense to convert the text to (past or future)
        /// </summary>
        [JsonProperty("tense")]
        public string Tense { get; set; }
    }
}

const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLFloat,
} = require("graphql");

const apiKey = "536f1b860110f17fbf49e75fe53d3601";

// Forecasts type
const ForecastsType = new GraphQLObjectType({
  name: "Forecasts",
  fields: () => ({
    list: { type: GraphQLList(ForecastType) },
    city: { type: CityType },
  }),
});

// Forecast type
const ForecastType = new GraphQLObjectType({
  name: "Forecast",
  fields: () => ({
    weather: { type: GraphQLList(WeatherType) },
    main: { type: MainType },
    dt_txt: { type: GraphQLString },
  }),
});

// City type
const CityType = new GraphQLObjectType({
  name: "City",
  fields: () => ({
    name: { type: GraphQLString },
    country: { type: GraphQLString },
    sunrise: { type: GraphQLString },
    sunset: { type: GraphQLString },
  }),
});

// Weather type
const WeatherType = new GraphQLObjectType({
  name: "Weather",
  fields: () => ({
    main: { type: GraphQLString },
    description: { type: GraphQLString },
    icon: { type: GraphQLString },
  }),
});

// Main type
const MainType = new GraphQLObjectType({
  name: "Main",
  fields: () => ({
    temp_min: { type: GraphQLFloat },
    temp_max: { type: GraphQLFloat },
  }),
});

// root query
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    forecasts: {
      type: ForecastsType,
      args: {
        city: { type: GraphQLString },
      },
      resolve(parent, args) {
        return axios
          .get(
            `http://api.openweathermap.org/data/2.5/forecast?q=${args.city}&appid=${apiKey}`
          )
          .then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});

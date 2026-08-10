import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'staging', 'test')
    .default('development'),
  APP_PORT: Joi.number().default(3000),
  LOG_LEVEL: Joi.string().default('info'),
  // DATABASE_HOST: Joi.string().required(),
  // DATABASE_PORT: Joi.number().required(),
  // DATABASE_USERNAME: Joi.string().required(),
  // DATABASE_PASSWORD: Joi.string().required(),
  // DATABASE_NAME: Joi.string().required(),
  DATABASE_URL: Joi.string().required(),
});

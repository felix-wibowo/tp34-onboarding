/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'node:url';
import createJiti from 'jiti';
import withNextIntl from 'next-intl/plugin';

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti('./src/libs/Env');

const withNextIntlConfig = withNextIntl('./src/libs/i18n.ts');
const nextConfig = {};
 
export default withNextIntlConfig(nextConfig);
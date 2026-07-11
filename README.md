# @ai-native-solutions/mongodb-atlas-sdk

Sovereign wrapper for **MongoDB Atlas** · Database

**100 endpoints** wrapped from OpenAPI spec.

## Install
```bash
npm install @ai-native-solutions/mongodb-atlas-sdk
```

## Use
```js
import MongodbAtlas from '@ai-native-solutions/mongodb-atlas-sdk';
const client = new MongodbAtlas({ apiKey: process.env.MONGODB_ATLAS_KEY });
```

## Endpoints (100)
- `GET /api/atlas/v2` · Return the Status of This MongoDB Application
- `GET /api/atlas/v2/alertConfigs/matchers/fieldNames` · Return All Alert Configuration Matchers Field Names
- `GET /api/atlas/v2/clusters` · Return All Authorized Clusters in All Projects
- `GET /api/atlas/v2/defaultGroupLimits` · Return Descriptions of User-Configurable Project Limits
- `GET /api/atlas/v2/defaultGroupLimits/{limitName}` · Return One User-Configurable Project Limit and Description
- `GET /api/atlas/v2/eventTypes` · Return All Event Types
- `DELETE /api/atlas/v2/federationSettings/{federationSettingsId}` · Delete One Federation Settings Instance
- `GET /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs` · Return All Organization Configurations from One Federation
- `GET /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}` · Return One Organization Configuration from One Federation
- `PATCH /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}` · Update One Organization Configuration in One Federation
- `DELETE /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}` · Remove One Organization Configuration from One Federation
- `GET /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings` · Return All Role Mappings from One Organization
- `POST /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings` · Create One Role Mapping in One Organization Configuration
- `GET /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings/{id}` · Return One Role Mapping from One Organization
- `PUT /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings/{id}` · Update One Role Mapping in One Organization
- `DELETE /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings/{id}` · Remove One Role Mapping from One Organization
- `GET /api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders` · Return All Identity Providers in One Federation
- `POST /api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders` · Create One Identity Provider
- `GET /api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders/{identityProviderId}` · Return One Identity Provider by ID
- `PATCH /api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders/{identityProviderId}` · Update One Identity Provider
_...and 80 more_

## License
MIT · Copyright 2026 AI-Native Solutions

## Upstream
- Docs: https://www.mongodb.com/docs/atlas/
- Homepage: https://mongodb.com/atlas

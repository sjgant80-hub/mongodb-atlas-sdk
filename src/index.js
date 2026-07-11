/**
 * mongodb-atlas-sdk · sovereign wrapper for MongoDB Atlas
 * Database
 *
 * Auto-generated from OpenAPI spec · 2026-07-11
 * 100 endpoints wrapped · spec version 2.0
 *
 * Docs (upstream): https://www.mongodb.com/docs/atlas/
 * Homepage: https://mongodb.com/atlas
 */

export class MongodbAtlas {
  constructor({ apiKey, baseURL = 'https://cloud.mongodb.com', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      
      
      ...headers
    };
  }

  /** GET /api/atlas/v2 · Return the Status of This MongoDB Application */
  async getSystemStatus(params = {}) {
    let path = '/api/atlas/v2'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/alertConfigs/matchers/fieldNames · Return All Alert Configuration Matchers Field Names */
  async listAlertConfigMatcherFieldNames(params = {}) {
    let path = '/api/atlas/v2/alertConfigs/matchers/fieldNames'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/clusters · Return All Authorized Clusters in All Projects */
  async listClusterDetails(params = {}) {
    let path = '/api/atlas/v2/clusters'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/defaultGroupLimits · Return Descriptions of User-Configurable Project Limits */
  async listDefaultGroupLimits(params = {}) {
    let path = '/api/atlas/v2/defaultGroupLimits'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/defaultGroupLimits/{limitName} · Return One User-Configurable Project Limit and Description */
  async getDefaultGroupLimit(params = {}) {
    let path = '/api/atlas/v2/defaultGroupLimits/{limitName}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/eventTypes · Return All Event Types */
  async listEventTypes(params = {}) {
    let path = '/api/atlas/v2/eventTypes'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /api/atlas/v2/federationSettings/{federationSettingsId} · Delete One Federation Settings Instance */
  async deleteFederationSetting(params = {}) {
    let path = '/api/atlas/v2/federationSettings/{federationSettingsId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs · Return All Organization Configurations from One Federation */
  async listFederationSettingConnectedOrgConfigs(params = {}) {
    let path = '/api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId} · Return One Organization Configuration from One Federation */
  async getFederationSettingConnectedOrgConfig(params = {}) {
    let path = '/api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId} · Update One Organization Configuration in One Federation */
  async updateFederationSettingConnectedOrgConfig(params = {}) {
    let path = '/api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId} · Remove One Organization Configuration from One Federation */
  async removeFederationSettingConnectedOrgConfig(params = {}) {
    let path = '/api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings · Return All Role Mappings from One Organization */
  async listFederationSettingConnectedOrgConfigRoleMappings(params = {}) {
    let path = '/api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings · Create One Role Mapping in One Organization Configuration */
  async createFederationSettingConnectedOrgConfigRoleMapping(params = {}) {
    let path = '/api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings/{id} · Return One Role Mapping from One Organization */
  async getFederationSettingConnectedOrgConfigRoleMapping(params = {}) {
    let path = '/api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings/{id} · Update One Role Mapping in One Organization */
  async updateFederationSettingConnectedOrgConfigRoleMapping(params = {}) {
    let path = '/api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings/{id} · Remove One Role Mapping from One Organization */
  async deleteFederationSettingConnectedOrgConfigRoleMapping(params = {}) {
    let path = '/api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders · Return All Identity Providers in One Federation */
  async listFederationSettingIdentityProviders(params = {}) {
    let path = '/api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders · Create One Identity Provider */
  async createFederationSettingIdentityProvider(params = {}) {
    let path = '/api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders/{identityProviderId} · Return One Identity Provider by ID */
  async getFederationSettingIdentityProvider(params = {}) {
    let path = '/api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders/{identityProviderId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders/{identityProviderId} · Update One Identity Provider */
  async updateFederationSettingIdentityProvider(params = {}) {
    let path = '/api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders/{identityProviderId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders/{identityProviderId} · Delete One Identity Provider */
  async deleteFederationSettingIdentityProvider(params = {}) {
    let path = '/api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders/{identityProviderId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders/{identityProviderId}/jwks · Revoke JWKS from One OIDC Identity Provider */
  async revokeFederationSettingIdentityProviderJwks(params = {}) {
    let path = '/api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders/{identityProviderId}/jwks'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders/{identityProviderId}/metadata.xml · Return Metadata of One Identity Provider */
  async getFederationSettingIdentityProviderMetadata(params = {}) {
    let path = '/api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders/{identityProviderId}/metadata.xml'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups · Return All Projects */
  async listGroups(params = {}) {
    let path = '/api/atlas/v2/groups'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /api/atlas/v2/groups · Create One Project */
  async createGroup(params = {}) {
    let path = '/api/atlas/v2/groups'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/byName/{groupName} · Return One Project by Name */
  async getGroupByName(params = {}) {
    let path = '/api/atlas/v2/groups/byName/{groupName}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId} · Return One Project */
  async getGroup(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /api/atlas/v2/groups/{groupId} · Update One Project */
  async updateGroup(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /api/atlas/v2/groups/{groupId} · Remove One Project */
  async deleteGroup(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /api/atlas/v2/groups/{groupId}/access · Add One MongoDB Cloud User to One Project */
  async addGroupAccessUser(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/access'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/accessList · Return All Project IP Access List Entries */
  async listGroupAccessListEntries(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/accessList'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /api/atlas/v2/groups/{groupId}/accessList · Add Entries to Project IP Access List */
  async createGroupAccessListEntry(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/accessList'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/accessList/{entryValue} · Return One Project IP Access List Entry */
  async getGroupAccessListEntry(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/accessList/{entryValue}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /api/atlas/v2/groups/{groupId}/accessList/{entryValue} · Remove One Entry from One Project IP Access List */
  async deleteGroupAccessListEntry(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/accessList/{entryValue}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/accessList/{entryValue}/status · Return Status of One Project IP Access List Entry */
  async getGroupAccessListStatus(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/accessList/{entryValue}/status'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/activityFeed · Return Pre-Filtered Activity Feed Link for One Project */
  async getGroupActivityFeed(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/activityFeed'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/aiModelApiKeys · Return AI Model API Keys for One Group */
  async listGroupAiModelApiKeys(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/aiModelApiKeys'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /api/atlas/v2/groups/{groupId}/aiModelApiKeys · Create New AI Model API Key */
  async createGroupAiModelApiKey(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/aiModelApiKeys'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/aiModelApiKeys/{apiKeyId} · Return Single AI Model API Key for One Group */
  async getGroupAiModelApiKey(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/aiModelApiKeys/{apiKeyId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /api/atlas/v2/groups/{groupId}/aiModelApiKeys/{apiKeyId} · Update Existing AI Model API Key */
  async updateGroupAiModelApiKey(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/aiModelApiKeys/{apiKeyId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /api/atlas/v2/groups/{groupId}/aiModelApiKeys/{apiKeyId} · Delete Existing AI Model API Key */
  async deleteGroupAiModelApiKey(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/aiModelApiKeys/{apiKeyId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/aiModelApiRateLimits · Return AI Model Rate Limits for One Group */
  async listGroupAiModelApiRateLimits(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/aiModelApiRateLimits'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/aiModelApiRateLimits/{modelGroupName} · Return Single AI Model Rate Limit for One Group */
  async getGroupAiModelApiRateLimit(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/aiModelApiRateLimits/{modelGroupName}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /api/atlas/v2/groups/{groupId}/aiModelApiRateLimits/{modelGroupName} · Update AI Model Rate Limit */
  async updateGroupAiModelApiRateLimit(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/aiModelApiRateLimits/{modelGroupName}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /api/atlas/v2/groups/{groupId}/aiModelApiRateLimits/{modelGroupName}:reset · Reset AI Model Rate Limit for One Model Group */
  async resetGroupAiModelApiRateLimit(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/aiModelApiRateLimits/{modelGroupName}:reset'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /api/atlas/v2/groups/{groupId}/aiModelApiRateLimits:reset · Reset AI Model Rate Limits for Group */
  async resetGroupAiModelApiRateLimits(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/aiModelApiRateLimits:reset'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/alertConfigs · Return All Alert Configurations in One Project */
  async listGroupAlertConfigs(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/alertConfigs'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /api/atlas/v2/groups/{groupId}/alertConfigs · Create One Alert Configuration in One Project */
  async createGroupAlertConfig(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/alertConfigs'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/alertConfigs/{alertConfigId} · Return One Alert Configuration from One Project */
  async getGroupAlertConfig(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/alertConfigs/{alertConfigId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /api/atlas/v2/groups/{groupId}/alertConfigs/{alertConfigId} · Update One Alert Configuration in One Project */
  async updateGroupAlertConfig(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/alertConfigs/{alertConfigId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /api/atlas/v2/groups/{groupId}/alertConfigs/{alertConfigId} · Toggle State of One Alert Configuration in One Project */
  async toggleGroupAlertConfig(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/alertConfigs/{alertConfigId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /api/atlas/v2/groups/{groupId}/alertConfigs/{alertConfigId} · Remove One Alert Configuration from One Project */
  async deleteGroupAlertConfig(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/alertConfigs/{alertConfigId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/alertConfigs/{alertConfigId}/alerts · Return All Open Alerts for One Alert Configuration */
  async getGroupAlertConfigAlerts(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/alertConfigs/{alertConfigId}/alerts'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/alerts · Return All Alerts from One Project */
  async listGroupAlerts(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/alerts'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/alerts/{alertId} · Return One Alert from One Project */
  async getGroupAlert(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/alerts/{alertId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /api/atlas/v2/groups/{groupId}/alerts/{alertId} · Acknowledge One Alert from One Project */
  async acknowledgeGroupAlert(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/alerts/{alertId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/alerts/{alertId}/alertConfigs · Return All Alert Configurations Set for One Alert */
  async getGroupAlertAlertConfigs(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/alerts/{alertId}/alertConfigs'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/apiKeys · Return All Organization API Keys Assigned to One Project */
  async listGroupApiKeys(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/apiKeys'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /api/atlas/v2/groups/{groupId}/apiKeys · Create and Assign One Organization API Key to One Project */
  async createGroupApiKey(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/apiKeys'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /api/atlas/v2/groups/{groupId}/apiKeys/{apiUserId} · Assign One Organization API Key to One Project */
  async addGroupApiKey(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/apiKeys/{apiUserId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /api/atlas/v2/groups/{groupId}/apiKeys/{apiUserId} · Update Organization API Key Roles for One Project */
  async updateGroupApiKeyRoles(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/apiKeys/{apiUserId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /api/atlas/v2/groups/{groupId}/apiKeys/{apiUserId} · Unassign One Organization API Key from One Project */
  async removeGroupApiKey(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/apiKeys/{apiUserId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/auditLog · Return Auditing Configuration for One Project */
  async getGroupAuditLog(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/auditLog'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /api/atlas/v2/groups/{groupId}/auditLog · Update Auditing Configuration for One Project */
  async updateGroupAuditLog(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/auditLog'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/awsCustomDNS · Return One Custom DNS Configuration for Atlas Clusters on AWS */
  async getGroupAwsCustomDns(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/awsCustomDNS'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /api/atlas/v2/groups/{groupId}/awsCustomDNS · Update State of One Custom DNS Configuration for Atlas Clusters on AWS */
  async toggleGroupAwsCustomDns(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/awsCustomDNS'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/backup/exportBuckets · Return All Snapshot Export Buckets */
  async listGroupBackupExportBuckets(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/backup/exportBuckets'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /api/atlas/v2/groups/{groupId}/backup/exportBuckets · Create One Snapshot Export Bucket */
  async createGroupBackupExportBucket(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/backup/exportBuckets'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/backup/exportBuckets/{exportBucketId} · Return One Snapshot Export Bucket */
  async getGroupBackupExportBucket(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/backup/exportBuckets/{exportBucketId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /api/atlas/v2/groups/{groupId}/backup/exportBuckets/{exportBucketId} · Update One Export Bucket Private Networking Settings */
  async updateGroupBackupExportBucket(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/backup/exportBuckets/{exportBucketId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /api/atlas/v2/groups/{groupId}/backup/exportBuckets/{exportBucketId} · Delete One Snapshot Export Bucket */
  async deleteGroupBackupExportBucket(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/backup/exportBuckets/{exportBucketId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/backup/{cloudProvider}/privateEndpoints · Return Object Storage Private Endpoints for Cloud Backups for One Cloud Provider in One Project */
  async listGroupBackupPrivateEndpoints(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/backup/{cloudProvider}/privateEndpoints'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /api/atlas/v2/groups/{groupId}/backup/{cloudProvider}/privateEndpoints · Create One Object Storage Private Endpoint for Cloud Backups for One Cloud Provider in One Project */
  async createGroupBackupPrivateEndpoint(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/backup/{cloudProvider}/privateEndpoints'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/backup/{cloudProvider}/privateEndpoints/{endpointId} · Return One Object Storage Private Endpoint for Cloud Backups for One Cloud Provider in One Project */
  async getGroupBackupPrivateEndpoint(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/backup/{cloudProvider}/privateEndpoints/{endpointId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /api/atlas/v2/groups/{groupId}/backup/{cloudProvider}/privateEndpoints/{endpointId} · Delete One Object Storage Private Endpoint for Cloud Backups for One Cloud Provider from One Project */
  async deleteGroupBackupPrivateEndpoint(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/backup/{cloudProvider}/privateEndpoints/{endpointId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/backupCompliancePolicy · Return Backup Compliance Policy Settings */
  async getGroupBackupCompliancePolicy(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/backupCompliancePolicy'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /api/atlas/v2/groups/{groupId}/backupCompliancePolicy · Update Backup Compliance Policy Settings */
  async updateGroupBackupCompliancePolicy(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/backupCompliancePolicy'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /api/atlas/v2/groups/{groupId}/backupCompliancePolicy · Disable Backup Compliance Policy Settings */
  async disableGroupBackupCompliancePolicy(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/backupCompliancePolicy'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/cloudProviderAccess · Return All Cloud Provider Access Roles */
  async listGroupCloudProviderAccess(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/cloudProviderAccess'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /api/atlas/v2/groups/{groupId}/cloudProviderAccess · Create One Cloud Provider Access Role */
  async createGroupCloudProviderAccess(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/cloudProviderAccess'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{cloudProvider}/{roleId} · Deauthorize One Cloud Provider Access Role */
  async deauthorizeGroupCloudProviderAccessRole(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/cloudProviderAccess/{cloudProvider}/{roleId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId} · Return One Cloud Provider Access Role */
  async getGroupCloudProviderAccess(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId} · Authorize One Cloud Provider Access Role */
  async authorizeGroupCloudProviderAccessRole(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /api/atlas/v2/groups/{groupId}/clusterConfigurations:validate · Validate One Cluster Configuration */
  async validateGroupClusterConfigurations(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/clusterConfigurations:validate'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/clusters · Return All Clusters in One Project */
  async listGroupClusters(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/clusters'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /api/atlas/v2/groups/{groupId}/clusters · Create One Cluster in One Project */
  async createGroupCluster(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/clusters'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/clusters/provider/regions · Return All Cloud Provider Regions */
  async listGroupClusterProviderRegions(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/clusters/provider/regions'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /api/atlas/v2/groups/{groupId}/clusters/tenantUpgrade · Upgrade One Shared-Tier Cluster */
  async upgradeGroupClusterTenantUpgrade(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/clusters/tenantUpgrade'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /api/atlas/v2/groups/{groupId}/clusters/tenantUpgradeToServerless · Upgrade One Shared-Tier Cluster to One Serverless Instance */
  async upgradeGroupClusterTenantUpgradeToServerless(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/clusters/tenantUpgradeToServerless'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/clusters/{clusterName} · Return One Cluster from One Project */
  async getGroupCluster(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/clusters/{clusterName}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /api/atlas/v2/groups/{groupId}/clusters/{clusterName} · Update One Cluster in One Project */
  async updateGroupCluster(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/clusters/{clusterName}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /api/atlas/v2/groups/{groupId}/clusters/{clusterName} · Remove One Cluster from One Project */
  async deleteGroupCluster(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/clusters/{clusterName}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/autoScalingConfiguration · Return Auto Scaling Configuration for One Sharded Cluster */
  async autoGroupClusterScalingConfiguration(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/clusters/{clusterName}/autoScalingConfiguration'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/backup/exports · Return All Snapshot Export Jobs */
  async listGroupClusterBackupExports(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/clusters/{clusterName}/backup/exports'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/backup/exports · Create One Snapshot Export Job */
  async createGroupClusterBackupExport(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/clusters/{clusterName}/backup/exports'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/backup/exports/{exportId} · Return One Snapshot Export Job */
  async getGroupClusterBackupExport(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/clusters/{clusterName}/backup/exports/{exportId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/backup/restoreJobs · Return All Restore Jobs for One Cluster */
  async listGroupClusterBackupRestoreJobs(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/clusters/{clusterName}/backup/restoreJobs'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/backup/restoreJobs · Create One Restore Job of One Cluster */
  async createGroupClusterBackupRestoreJob(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/clusters/{clusterName}/backup/restoreJobs'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/backup/restoreJobs/{restoreJobId} · Return One Restore Job for One Cluster */
  async getGroupClusterBackupRestoreJob(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/clusters/{clusterName}/backup/restoreJobs/{restoreJobId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/backup/restoreJobs/{restoreJobId} · Cancel One Restore Job for One Cluster */
  async cancelGroupClusterBackupRestoreJob(params = {}) {
    let path = '/api/atlas/v2/groups/{groupId}/clusters/{clusterName}/backup/restoreJobs/{restoreJobId}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('mongodb-atlas ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }
}

export default MongodbAtlas;

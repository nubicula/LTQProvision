package com.leonteq.config;

import java.time.Duration;

import org.ehcache.config.builders.*;
import org.ehcache.jsr107.Eh107Configuration;

import io.github.jhipster.config.jcache.BeanClassLoaderAwareJCacheRegionFactory;
import io.github.jhipster.config.JHipsterProperties;

import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        BeanClassLoaderAwareJCacheRegionFactory.setBeanClassLoader(this.getClass().getClassLoader());
        JHipsterProperties.Cache.Ehcache ehcache =
            jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(ExpiryPolicyBuilder.timeToLiveExpiration(Duration.ofSeconds(ehcache.getTimeToLiveSeconds())))
                .build());
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            cm.createCache(com.leonteq.repository.UserRepository.USERS_BY_LOGIN_CACHE, jcacheConfiguration);
            cm.createCache(com.leonteq.repository.UserRepository.USERS_BY_EMAIL_CACHE, jcacheConfiguration);
            cm.createCache(com.leonteq.domain.User.class.getName(), jcacheConfiguration);
            cm.createCache(com.leonteq.domain.Authority.class.getName(), jcacheConfiguration);
            cm.createCache(com.leonteq.domain.User.class.getName() + ".authorities", jcacheConfiguration);
            cm.createCache(com.leonteq.domain.Vcenter.class.getName(), jcacheConfiguration);
            cm.createCache(com.leonteq.domain.PhysicalDatacenter.class.getName(), jcacheConfiguration);
            cm.createCache(com.leonteq.domain.VMHostCluster.class.getName(), jcacheConfiguration);
            cm.createCache(com.leonteq.domain.DatastoreCluster.class.getName(), jcacheConfiguration);
            cm.createCache(com.leonteq.domain.DatastoreCluster.class.getName() + ".vmhosts", jcacheConfiguration);
            cm.createCache(com.leonteq.domain.VMHost.class.getName(), jcacheConfiguration);
            cm.createCache(com.leonteq.domain.VMHost.class.getName() + ".datastores", jcacheConfiguration);
            cm.createCache(com.leonteq.domain.VMHost.class.getName() + ".datastoreclusters", jcacheConfiguration);
            cm.createCache(com.leonteq.domain.Datastore.class.getName(), jcacheConfiguration);
            cm.createCache(com.leonteq.domain.Datastore.class.getName() + ".vmhosts", jcacheConfiguration);
            cm.createCache(com.leonteq.domain.StorageArray.class.getName(), jcacheConfiguration);
            cm.createCache(com.leonteq.domain.VirtualVolume.class.getName(), jcacheConfiguration);
            // jhipster-needle-ehcache-add-entry
        };
    }
}

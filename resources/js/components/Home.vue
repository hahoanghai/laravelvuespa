<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link :to='`/${$i18n.locale}`' class="nav-link">{{ $t('nav.home') }}</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link :to='`/${$i18n.locale}/work`'  class="nav-link">{{ $t('nav.work') }}</router-link>
                    </li>
                    <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Language
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#" @click.prevent="setLocale('en')">English</a>
                            <a class="dropdown-item" href="#" @click.prevent="setLocale('fr')">French</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <h1>{{ $t('home.header') }}</h1>
            <h2>{{ $t('home.sub-header') }}</h2>
            <p>{{ $t('home.para') }}</p>
            <div class="row">
                <div class="col-md-8">
                    <img :src='`/images/${$i18n.locale}.jpg`' class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        setLocale(locale) {
            this.$i18n.locale = locale
            this.$router.push({
                params: { lang: locale }
            })
        }
    }
}
</script>
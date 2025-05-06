<template>

  <!-- DEFAULT META -->

  <Head>
    <!-- Page Title -->
    <Title>StoryTime – Read & Share Stories Worldwide</Title>

    <!-- Basic Meta Tags -->
    <Meta name="description"
      content="The world's most-loved social storytelling platform. StoryTime connects a global community of 90 million readers and writers through the power of story." />
    <Meta name="keywords"
      content="StoryTime, storytelling platform, read stories online, share stories, writers community, writing platform, free stories" />
    <Meta name="author" content="StoryTime Team" />
    <Meta name="viewport" content="width=device-width, initial-scale=1" />
    <Meta charset="utf-8" />

    <!-- https://ogp.me/ -->
    <!-- Open Graph / Facebook -->
    <Meta property="og:title" content="StoryTime – Read & Share Stories Worldwide" />
    <Meta property="og:description"
      content="Join StoryTime to explore and share inspiring stories from around the globe." />
    <Meta property="og:type" content="website" />
    <Meta property="og:url" content="https://yourdomain.com" />
    <Meta property="og:image" content="/favicomatic/favicon-196x196.png" />

    <!-- Twitter -->
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:title" content="StoryTime – Read & Share Stories Worldwide" />
    <Meta name="twitter:description"
      content="The world's most-loved social storytelling platform with millions of readers and writers." />
    <Meta name="twitter:image" content="/favicomatic/favicon-196x196.png" />

    <!-- Favicon -->
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/favicomatic/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/favicomatic/apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/favicomatic/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/favicomatic/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/favicomatic/apple-touch-icon-60x60.png" />
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/favicomatic/apple-touch-icon-120x120.png" />
    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/favicomatic/apple-touch-icon-76x76.png" />
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/favicomatic/apple-touch-icon-152x152.png" />
    <link rel="icon" type="image/png" href="/favicomatic/favicon-196x196.png" sizes="196x196" />
    <link rel="icon" type="image/png" href="/favicomatic/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/png" href="/favicomatic/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="/favicomatic/favicon-16x16.png" sizes="16x16" />
    <link rel="icon" type="image/png" href="/favicomatic/favicon-128.png" sizes="128x128" />
    <meta name="application-name" content="&nbsp;" />
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="/favicomatic/mstile-144x144.png" />
    <meta name="msapplication-square70x70logo" content="/favicomatic/mstile-70x70.png" />
    <meta name="msapplication-square150x150logo" content="/favicomatic/mstile-150x150.png" />
    <meta name="msapplication-wide310x150logo" content="/favicomatic/mstile-310x150.png" />
    <meta name="msapplication-square310x310logo" content="/favicomatic/mstile-310x310.png" />

  </Head>

  <!-- NUXT LAYOUT -->
  <NuxtLayout>
    <NuxtLoadingIndicator :height="10" :throttle="0" />
    <NuxtErrorBoundary>
      <!-- ERROR HANDLING -->
      <template #error="{ error }">
        <!-- Using NuxtErrorBoundary components around distinct chunks of functionality in your app allows you to handle a group of errors together, providing better UX. -->
        <!-- This lets you contain errors in your app and handle them in specific ways instead of using a generic error page. -->

        <section class="container error">
          <div class="error__left">
            <img src="/images/undraw_server_down.svg" alt="server down" class="error__image" />
          </div>
          <div class="error__right">
            <h1 class="error__heading1">Page Error</h1>
            <code class="error_heading2">{{ error }}</code>
            <p class="error__desc">
              Oh no, something broke when loading the lesson!
            </p>
            <UiButton label="Back To Home" variant="primary" />
          </div>
        </section>

      </template>
      <!-- NUXT PAGE -->
      <NuxtPage />
    </NuxtErrorBoundary>
  </NuxtLayout>

</template>

<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'id' },
  link: [{ rel: 'canonical', href: 'https://nuxt.com/' }],
});
</script>


<style lang="scss" scoped>
// ERROR HANDLING CSS
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 60px 0;
  min-height: 80vh;

  &__image {
    width: 100%;
  }

  &__heading1 {
    font-family: Playfair Display;
    font-weight: 700;
    font-size: 40px;
    letter-spacing: 0%;
    text-align: center;
  }

  &__heading2 {
    font-family: Playfair Display;
    font-weight: 600;
    font-size: 44px;
    letter-spacing: 0%;
    text-align: center;
  }

  &__desc {
    font-family: DM Sans;
    font-weight: 400;
    font-size: clamp(11px, 1vw + 0.5rem, 14px);
    letter-spacing: 0%;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  &__left {
    width: 40%;
  }

  &__right {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>

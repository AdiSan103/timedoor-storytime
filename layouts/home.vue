<template>
  <main>
    <LayoutsNavbar />
    <slot />
    <UiButtonToUp />
    <LayoutsFooter />
  </main>
</template>

<style lang="css">
main {
  position: relative;
  overflow-x: hidden;
}
</style>

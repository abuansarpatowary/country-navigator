<script setup>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue'
import logo from '../assets/img/Logo.png';
</script>
<template>
  <Navbar>
    <template #logo>
      <NavbarLogo :src="logo" />
    </template>
    <template #default="{ isShowMenu }">
      <NavbarCollapse :isShowMenu="isShowMenu">
        <NavbarLink is-active>Home</NavbarLink>
        <router-link to="/about"><NavbarLink>About</NavbarLink></router-link>
        <router-link to="/countries"><NavbarLink>Country</NavbarLink></router-link>
      </NavbarCollapse>
    </template>
    <template #right-side>
      <button type="button"
        class="text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-600">Get
        started</button>
    </template>
  </Navbar>
  </template>

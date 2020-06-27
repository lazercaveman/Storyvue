# Vuex Architecture 
The Vuex instance is structured by the following structure:

## Global state managenent: actions, getters, mutations, state
Files which are placed in the first level of the store folder are containing states which are used global only.

- Files should contain global states only.

## files within the modules folder
This folder contains vuex-files which are related to componants. 

- Vuex-file should always be named as like the related component file.
- Files should contain component related states only.

## Use of Vuex
- only use actions in components (for consistency reasons)
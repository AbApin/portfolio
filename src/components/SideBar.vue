<script setup></script>

<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <div class="sidebar-avatar">
        <img src="../assets/images/profile.jpg" alt="Avatar" />
      </div>
      <p class="sidebar-name">Albert Apinyan</p>
      <p class="sidebar-profeccy">I`m a Front End Developer</p>
    </div>
    <div class="sidebar-social">
      <a href="https://www.linkedin.com/in/albert-apinyan-463a2b176/" class="sidebar-social-link">
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://github.com/" class="sidebar-social-link">
        <i class="fa-brands fa-github"></i>
      </a>
    </div>
    <div class="sidebar-info">
      <div class="sidebar-info_item">
        <p class="sidebar-info-item-label">RESIDENCE:</p>
        <p class="sidebar-info-item-value">Armenia</p>
      </div>
      <div class="sidebar-info_item">
        <p class="sidebar-info-item-label">CITY:</p>
        <p class="sidebar-info-item-value">Vanadzor</p>
      </div>
      <div class="sidebar-info_item">
        <p class="sidebar-info-item-label">AGE:</p>
        <p class="sidebar-info-item-value">27</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  position: sticky;
  top: 90px;
  width: 100%;
  max-width: 33%;
  background-color: #12492f;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding-bottom: 100px;
  z-index: 10;
}
.sidebar-avatar {
  text-align: center;
}
.sidebar-avatar img {
  border: solid 3px #dedee0;
  box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.6);
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
}
.sidebar-name {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.2;
  color: #dedee0;
  margin-top: 10px;
  text-align: center;
}
.sidebar-profeccy {
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #919ca1;
  margin-top: 10px;
  text-align: center;
}
.sidebar-social {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 80px;
  margin-top: 30px;
  border-bottom: dotted 2px rgba(225, 225, 235, 0.15);
  border-top: dotted 2px rgba(225, 225, 235, 0.15);
}
.sidebar-social i {
  color: #dedee0;
  transition: all 0.3s;
}
.sidebar-social i:hover {
  color: #f56038;
}
.sidebar-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 0;
  border-bottom: dotted 2px rgba(225, 225, 235, 0.15);
}
.sidebar-info_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sidebar-info-item-label {
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #dedee0;
  transition: 0.4s ease-in-out;
}
.sidebar-info-item-value {
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #919ca1;
  transition: 0.4s ease-in-out;
}
@media screen and (max-width: 991px) {
  .sidebar {
    position: static;
    max-width: 100%;
    margin: 0 auto;
    padding-bottom: 50px;
    z-index: 10;
  }
}
@media screen and (max-width: 767px) {
  .sidebar {
    padding: 20px;
  }
}
</style>

<template>
  <div>
    <section class="pb-5 bg-hero">
      <b-container class="pt-5">
        <b-row>
          <b-col cols="12" lg="12" md="12" sm="12">
            <h1 class="text-center">
              Deploy applications and CI/CD into AWS in minutes
            </h1>
<!--            <svg-->
<!--              id="hero-stroke"-->
<!--              class="my-5"-->
<!--              width="487"-->
<!--              height="34"-->
<!--              viewBox="0 0 487 34"-->
<!--              fill="none"-->
<!--              xmlns="http://www.w3.org/2000/svg"-->
<!--            >-->
<!--              <path-->
<!--                d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30"-->
<!--                stroke="#54BD95"-->
<!--                stroke-width="8"-->
<!--                stroke-linecap="round"-->
<!--              />-->
<!--            </svg>-->

            <p class="hero-description text-center">
              Streamline your application deployment. Deploy applications into AWS and get a CI/CD pipeline in mere minutes. Reduce manual effort and accelerate your project timelines. Focus on creating, while we handle the complexities of AWS.
            </p>
          </b-col>
          <br class="d-none d-sm-block" />
          <b-col cols="12" lg="12" md="12" sm="12" class="text-center">
            <b-img
              alt="hero image"
              class="img-fluid"
              :src="require(`~/assets/img/screenshots/wizard001.png`)"
            ></b-img>
          </b-col>
          <b-col cols="12" lg="12" md="12" sm="12" class="d-flex flex-column mt-5">
<!--            <h3 class="mx-auto mt-5">More then 25,000 team use Collaps</h3>-->
            <div class="text-center">
              <img id="hero-pba" :src="require(`~/assets/img/poweredbyaws.png`)">
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="bg-green-light py-5">
      <b-container>
        <b-row>
          <b-col cols="12" lg="6" md="6" sm="12">
            <h2>Simplify deploying applications into AWS</h2>
            <div class="my-3">
              <p class="text-muted">
                Set up infrastructure in your AWS account and CI/CD pipelines in a matter of minutes.
              </p>
            </div>
            <div class="d-flexd d-none flex-row">
              <div class="d-flex flex-column">
                <svg
                  width="142"
                  height="26"
                  viewBox="0 0 142 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z"
                    fill="#FFC728"
                  />
                  <path
                    d="M42 0L44.9187 8.98278H54.3637L46.7225 14.5344L49.6412 23.5172L42 17.9656L34.3588 23.5172L37.2775 14.5344L29.6363 8.98278H39.0813L42 0Z"
                    fill="#FFC728"
                  />
                  <path
                    d="M71 0L73.9187 8.98278H83.3637L75.7225 14.5344L78.6412 23.5172L71 17.9656L63.3588 23.5172L66.2775 14.5344L58.6363 8.98278H68.0813L71 0Z"
                    fill="#FFC728"
                  />
                  <path
                    d="M100 0L102.919 8.98278H112.364L104.723 14.5344L107.641 23.5172L100 17.9656L92.3588 23.5172L95.2775 14.5344L87.6363 8.98278H97.0813L100 0Z"
                    fill="#FFC728"
                  />
                  <path
                    d="M129 0L131.919 8.98278H141.364L133.723 14.5344L136.641 23.5172L129 17.9656L121.359 23.5172L124.277 14.5344L116.636 8.98278H126.081L129 0Z"
                    fill="#FFC728"
                  />
                </svg>

                <h5>4.9 / 5 Rating</h5>
                <h5 class="text-muted">Databricks</h5>
              </div>
              <div class="d-flex flex-column ml-5">
                <svg
                  width="142"
                  height="26"
                  viewBox="0 0 142 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z"
                    fill="#FFC728"
                  />
                  <path
                    d="M42 0L44.9187 8.98278H54.3637L46.7225 14.5344L49.6412 23.5172L42 17.9656L34.3588 23.5172L37.2775 14.5344L29.6363 8.98278H39.0813L42 0Z"
                    fill="#FFC728"
                  />
                  <path
                    d="M71 0L73.9187 8.98278H83.3637L75.7225 14.5344L78.6412 23.5172L71 17.9656L63.3588 23.5172L66.2775 14.5344L58.6363 8.98278H68.0813L71 0Z"
                    fill="#FFC728"
                  />
                  <path
                    d="M100 0L102.919 8.98278H112.364L104.723 14.5344L107.641 23.5172L100 17.9656L92.3588 23.5172L95.2775 14.5344L87.6363 8.98278H97.0813L100 0Z"
                    fill="#FFC728"
                  />
                  <path
                    d="M129 0L131.919 8.98278H141.364L133.723 14.5344L136.641 23.5172L129 17.9656L121.359 23.5172L124.277 14.5344L116.636 8.98278H126.081L129 0Z"
                    fill="#BBBBBB"
                  />
                </svg>

                <h5>4.8 / 5 Rating</h5>
                <h5 class="text-muted">Chainalysis</h5>
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="6" md="6" sm="12" class="mt-sm-5">
            <div class="d-flex flex-column">
              <div class="d-flex flex-row">
                <div class="d-fle align-items-start">
                  <svg
                    width="78"
                    height="78"
                    viewBox="0 0 78 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_0_1)">
                      <rect x="9" y="5" width="60" height="60" fill="white" />
                    </g>
                    <g clip-path="url(#clip0_0_1)">
                      <path
                        d="M51.5 35H46.5L42.75 46.25L35.25 23.75L31.5 35H26.5"
                        stroke="#54BD95"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_0_1"
                        x="0"
                        y="0"
                        width="78"
                        height="78"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="4.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_0_1"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_0_1"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_0_1">
                        <rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="translate(24 20)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h5>Deploy</h5>
                  <p class="text-muted">
                    Effortlessly deploy infrastructure and code updates. Our platform is designed to streamline your workflow, allowing you to push updates with just a few clicks. Plus, with real-time monitoring features, you can keep track of your deployments and ensure everything runs smoothly.
                  </p>
                </div>
              </div>
              <div class="d-flex flex-row my-lg-5">
                <div class="d-fle align-items-start">
                  <svg
                    width="78"
                    height="78"
                    viewBox="0 0 78 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_0_1)">
                      <rect x="9" y="5" width="60" height="60" fill="white" />
                    </g>
                    <path
                      d="M50.512 39.8626C49.7168 41.7432 48.473 43.4004 46.8894 44.6892C45.3057 45.9781 43.4305 46.8594 41.4276 47.2561C39.4247 47.6528 37.3551 47.5528 35.3997 46.9648C33.4444 46.3769 31.6628 45.3189 30.2108 43.8834C28.7588 42.4479 27.6805 40.6785 27.0703 38.73C26.4601 36.7815 26.3365 34.7132 26.7103 32.7059C27.0841 30.6986 27.9439 28.8134 29.2146 27.2151C30.4853 25.6169 32.1281 24.3542 33.9995 23.5376"
                      stroke="#54BD95"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M51.5 35C51.5 33.3585 51.1767 31.733 50.5485 30.2165C49.9203 28.6999 48.9996 27.3219 47.8388 26.1612C46.6781 25.0004 45.3001 24.0797 43.7835 23.4515C42.267 22.8233 40.6415 22.5 39 22.5V35H51.5Z"
                      stroke="#54BD95"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <filter
                        id="filter0_d_0_1"
                        x="0"
                        y="0"
                        width="78"
                        height="78"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="4.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_0_1"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_0_1"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h5>Time</h5>
                  <p class="text-muted">
                    Maximize your productivity by spending less time managing AWS resources. Experience the efficiency of streamlined cloud management, and let our platform handle the complexities of AWS resources for you.
                  </p>
                </div>
              </div>
              <div class="d-flexss flex-row d-none">
                <div class="d-fle align-items-start">
                  <svg
                    width="78"
                    height="78"
                    viewBox="0 0 78 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_0_1)">
                      <rect x="9" y="5" width="60" height="60" fill="white" />
                    </g>
                    <path
                      d="M46.5 23.75C45.5054 23.75 44.5516 24.1451 43.8483 24.8483C43.1451 25.5516 42.75 26.5054 42.75 27.5V42.5C42.75 43.4946 43.1451 44.4484 43.8483 45.1517C44.5516 45.8549 45.5054 46.25 46.5 46.25C47.4946 46.25 48.4484 45.8549 49.1517 45.1517C49.8549 44.4484 50.25 43.4946 50.25 42.5C50.25 41.5054 49.8549 40.5516 49.1517 39.8483C48.4484 39.1451 47.4946 38.75 46.5 38.75H31.5C30.5054 38.75 29.5516 39.1451 28.8483 39.8483C28.1451 40.5516 27.75 41.5054 27.75 42.5C27.75 43.4946 28.1451 44.4484 28.8483 45.1517C29.5516 45.8549 30.5054 46.25 31.5 46.25C32.4946 46.25 33.4484 45.8549 34.1517 45.1517C34.8549 44.4484 35.25 43.4946 35.25 42.5V27.5C35.25 26.5054 34.8549 25.5516 34.1517 24.8483C33.4484 24.1451 32.4946 23.75 31.5 23.75C30.5054 23.75 29.5516 24.1451 28.8483 24.8483C28.1451 25.5516 27.75 26.5054 27.75 27.5C27.75 28.4946 28.1451 29.4484 28.8483 30.1517C29.5516 30.8549 30.5054 31.25 31.5 31.25H46.5C47.4946 31.25 48.4484 30.8549 49.1517 30.1517C49.8549 29.4484 50.25 28.4946 50.25 27.5C50.25 26.5054 49.8549 25.5516 49.1517 24.8483C48.4484 24.1451 47.4946 23.75 46.5 23.75Z"
                      stroke="#54BD95"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <filter
                        id="filter0_d_0_1"
                        x="0"
                        y="0"
                        width="78"
                        height="78"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="4.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_0_1"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_0_1"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h5>Costs</h5>
                  <p class="text-muted">
                    Get more accurate pricing estimates and insights
                  </p>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="bg-green-light d-none">
      <b-container class="pt-5">
        <b-row>
          <b-col cols="12" md="4" lg="4" sm="12">
            <h2>Features to make<br class="d-none d-lg-block" /> DevOps simple</h2>
          </b-col>
          <b-col
            cols="12"
            md="5"
            lg="5"
            sm="12"
            class="d-flex align-items-center"
          >
            <p class="text-muted">

            </p>
          </b-col>
          <b-col
            cols="12"
            md="3"
            lg="3"
            sm="12"
            class="d-flex align-items-center"
          >
            <b-button
              class="rounded-lg ml-lg-auto text-white"
              variant="primary"
              size="lg"
              href="http://app.devbop.com/register"
              target="_blank"
            >Get Started</b-button
            >
          </b-col>
        </b-row>
        <b-row class="mt-5 p-lg-5">
          <b-col cols="12" lg="4" md="4" sm="4">
            <b-card class="rounded-lg border-0 card-feature bg-white">
              <b-img
                alt="feature"
                class="img-fluid img-feature d-none"
                :src="require(`~/assets/img/features/collboration_cloud.png`)"
              >
              </b-img>
              <b-card-text class="pt-4">
                <h5>Deploy infra using a simple wizard</h5>
                <p class="text-muted">
                  Tell us what frameworks and databases you're using and our platform spins them up for you.
                </p>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" lg="4" md="4" sm="4">
            <b-card class="rounded-lg border-0 card-feature bg-white">
              <b-img
                alt="feature"
                class="img-fluid img-feature d-none"
                :src="require(`~/assets/img/features/cloud_storage.png`)"
              ></b-img>
              <b-card-text class="pt-4">
                <h5>Simplified dashboard</h5>
                <p class="text-muted">
                  Visualize and manage your multi-environment infrastructure and deployments in one place
                </p>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" lg="4" md="4" sm="4">
            <b-card class="rounded-lg border-0 card-feature bg-white">
              <b-img
                alt="feature"
                class="img-fluid img-feature d-none"
                :src="require(`~/assets/img/features/daily_analytics.png`)"
              >
              </b-img>
              <b-card-text class="pt-4">
                <h5>Cost estimations</h5>
                <p class="text-muted">
                  Get cost estimates before you hit deploy and on a continuous basis afterwards.
                </p>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row class="mt-0 p-lg-5">
          <b-col cols="12" lg="4" md="4" sm="4">
            <b-card class="rounded-lg border-0 card-feature bg-white">
              <b-img
                alt="feature"
                class="img-fluid img-feature d-none"
                :src="require(`~/assets/img/features/collboration_cloud.png`)"
              >
              </b-img>
              <b-card-text class="pt-4">
                <h5>CI/CD pipelines</h5>
                <p class="text-muted">
                  CI/CD pipelines linked to Github or Bitbucket will be created automatically.
                </p>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" lg="4" md="4" sm="4">
            <b-card class="rounded-lg border-0 card-feature bg-white">
              <b-img
                alt="feature"
                class="img-fluid img-feature d-none"
                :src="require(`~/assets/img/features/cloud_storage.png`)"
              ></b-img>
              <b-card-text class="pt-4">
                <h5>Release management</h5>
                <p class="text-muted">
                  Release at the click of a button or schedule for later. Get full visibility of all releases and their status.
                </p>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" lg="4" md="4" sm="4">
            <b-card class="rounded-lg border-0 card-feature bg-white">
              <b-img
                alt="feature"
                class="img-fluid img-feature d-none"
                :src="require(`~/assets/img/features/daily_analytics.png`)"
              >
              </b-img>
              <b-card-text class="pt-4">
                <h5>Easy maintenance</h5>
                <p class="text-muted">
                  Make changes from our simplified dashboard rather than complicated cloud provider dashboards.
                </p>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-5">
      <b-container class="py-5">
        <b-row>
          <b-col cols="12" md="6" lg="6" sm="12">
            <h2>Input Application Details<br class="d-none d-lg-block" /> Using a Form</h2>
          </b-col>
          <b-col
            cols="12"
            md="3"
            lg="3"
            sm="12"
            class="d-flex align-items-center"
          >
            <p class="text-muted">

            </p>
          </b-col>
          <b-col
            cols="12"
            md="3"
            lg="3"
            sm="12"
            class="d-flex align-items-center"
          >
            <b-button
              class="rounded-lg ml-lg-auto text-white"
              variant="primary"
              size="lg"
              href="http://app.devbop.com/register"
              target="_blank"
              >Get Started</b-button
            >
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" lg="12" md="12" sm="12">
            <p class="hero-description">
              Just fill in the necessary information about your application, and our platform will take care of the rest. This straightforward process eliminates the need for complex scripts or manual configurations, making it easier than ever to get your applications up and running on AWS.
            </p>
          </b-col>
        </b-row>
        <b-row class="mt-4">
          <b-col cols="12" lg="12" md="12" sm="12" class="text-center mb-4">
            <b-img
              alt="hero image"
              class="img-fluid"
              :src="require(`~/assets/img/screenshots/wizard002.png`)"
            ></b-img>
          </b-col>
          <b-col cols="12" lg="12" md="12" sm="12" class="text-center">
            <b-img
              alt="hero image"
              class="img-fluid"
              :src="require(`~/assets/img/screenshots/wizard003.png`)"
            ></b-img>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="bg-green-light py-5">
      <b-container class="py-5">
        <b-row>
          <b-col cols="12" md="6" lg="6" sm="12">
            <h2>CI/CD Pipelines<br class="d-none d-lg-block" /> Automatically Created</h2>
          </b-col>
          <b-col
            cols="12"
            md="3"
            lg="3"
            sm="12"
            class="d-flex align-items-center"
          >
            <p class="text-muted">

            </p>
          </b-col>
          <b-col
            cols="12"
            md="3"
            lg="3"
            sm="12"
            class="d-flex align-items-center"
          >
            <b-button
              class="rounded-lg ml-lg-auto text-white"
              variant="primary"
              size="lg"
              href="http://app.devbop.com/register"
              target="_blank"
              >Get Started</b-button
            >
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" lg="12" md="12" sm="12">
            <p class="hero-description">
              Once your application details are inputted, our system instantly sets up a robust CI/CD pipeline, eliminating the need for manual configuration. Embrace the efficiency of automation and let our platform handle the complexities of CI/CD pipeline creation
            </p>
          </b-col>
        </b-row>
        <b-row class="mt-4">
          <b-col cols="12" lg="12" md="12" sm="12" class="text-center">
            <b-img
              alt="hero image"
              class="img-fluid"
              :src="require(`~/assets/img/screenshots/cicd001.png`)"
            ></b-img>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-5">
      <b-container class="py-5">
        <b-row>
          <b-col cols="12" md="6" lg="6" sm="12">
            <h2>View Build Details<br class="d-none d-lg-block" /> </h2>
          </b-col>
          <b-col
            cols="12"
            md="3"
            lg="3"
            sm="12"
            class="d-flex align-items-center"
          >
            <p class="text-muted">

            </p>
          </b-col>
          <b-col
            cols="12"
            md="3"
            lg="3"
            sm="12"
            class="d-flex align-items-center"
          >
            <b-button
              class="rounded-lg ml-lg-auto text-white"
              variant="primary"
              size="lg"
              href="http://app.devbop.com/register"
              target="_blank"
              >Get Started</b-button
            >
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" lg="12" md="12" sm="12">
            <p class="hero-description">
              Gain full visibility into your build process. Instantly access critical information about build status, logs, and more. Our platform provides a clear, concise view of your build details, ensuring you're always informed and in control.
            </p>
          </b-col>
        </b-row>
        <b-row class="mt-4">
          <b-col cols="12" lg="12" md="12" sm="12" class="text-center">
            <b-img
              alt="hero image"
              class="img-fluid"
              :src="require(`~/assets/img/screenshots/builds002.png`)"
            ></b-img>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="bg-green-light py-5">
      <b-container class="py-5">
        <b-row>
          <b-col cols="12" md="6" lg="6" sm="12">
            <h2>View Build History<br class="d-none d-lg-block" /> </h2>
          </b-col>
          <b-col
            cols="12"
            md="3"
            lg="3"
            sm="12"
            class="d-flex align-items-center"
          >
            <p class="text-muted">

            </p>
          </b-col>
          <b-col
            cols="12"
            md="3"
            lg="3"
            sm="12"
            class="d-flex align-items-center"
          >
            <b-button
              class="rounded-lg ml-lg-auto text-white"
              variant="primary"
              size="lg"
              href="http://app.devbop.com/register"
              target="_blank"
              >Get Started</b-button
            >
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" lg="12" md="12" sm="12">
            <p class="hero-description">
              View a comprehensive record of your past builds, allowing you to review and analyze your deployment history at a glance. Stay informed, learn from the past, and continuously improve your deployment process with our platform.
            </p>
          </b-col>
        </b-row>
        <b-row class="mt-4">
          <b-col cols="12" lg="12" md="12" sm="12" class="text-center">
            <b-img
              alt="hero image"
              class="img-fluid"
              :src="require(`~/assets/img/screenshots/builds001.png`)"
            ></b-img>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-5">
      <b-container class="py-5">
        <b-row>
          <b-col cols="12" md="6" lg="6" sm="12">
            <h2>View all AWS <br class="d-none d-lg-block" /> resources created</h2>
          </b-col>
          <b-col
            cols="12"
            md="3"
            lg="3"
            sm="12"
            class="d-flex align-items-center"
          >
            <p class="text-muted">

            </p>
          </b-col>
          <b-col
            cols="12"
            md="3"
            lg="3"
            sm="12"
            class="d-flex align-items-center"
          >
            <b-button
              class="rounded-lg ml-lg-auto text-white"
              variant="primary"
              size="lg"
              href="http://app.devbop.com/register"
              target="_blank"
              >Get Started</b-button
            >
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" lg="12" md="12" sm="12">
            <p class="hero-description">
              Maintain complete oversight of your AWS environment. This tool provides a comprehensive diagram of all your AWS resources, giving you a clear snapshot of your cloud infrastructure.
            </p>
          </b-col>
        </b-row>
        <b-row class="mt-4">
          <b-col cols="12" lg="12" md="12" sm="12" class="text-center">
            <b-img
              alt="hero image"
              class="img-fluid"
              :src="require(`~/assets/img/screenshots/components001.png`)"
            ></b-img>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <div class="bg-section-product">
      <section>
        <b-container class="pt-5 pb-5">
          <b-row>
            <b-col lg="6" md="6" sm="12">
              <h2>
                DevBop allows <br class="d-none d-lg-block" />
                you to...
              </h2>
              <div class="d-flex flex-column mt-5">
                <div class="my-1 d-flex flex-row">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                    />
                  </svg>
                  <p class="ml-2">Spend less time managing AWS resources</p>
                </div>
                <div class="my-1 d-flex flex-row">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                    />
                  </svg>
                  <p class="ml-2">Visualize AWS resources on a per project basis</p>
                </div>
                <div class="my-1 d-flex flex-row">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                    />
                  </svg>
                  <p class="ml-2">Gain the confidence to take on more complex projects</p>
                </div>
                <div class="my-1 d-flex flex-row">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                    />
                  </svg>
                  <p class="ml-2">Manage multi-environment releases with ease</p>
                </div>
              </div>
            </b-col>
            <b-col lg="6" md="6" sm="12" class="text-center">
              <b-img
                alt="hero"
                :src="require(`~/assets/img/features/collboration_cloud.png`)"
                class="img-fluid"
              ></b-img>
            </b-col>
          </b-row>
        </b-container>
      </section>
      <section class="pb-5" hidden>
        <b-container class="mt-5">
          <div class="d-flex flex-column">
            <h2 class="mx-auto">
              Choose Plan <br />
              Thats's Right For Your
            </h2>
            <p class="text-muted mx-auto text-700 my-4">
              Choose plan that works best for you, feel free to contact us
            </p>
            <b-col lg="3" md="4" sm="10" cols="12" class="mx-auto">
              <div
                class="bg-white p-2 rounded-lg d-flex justify-content-between align-items-center font-weight-bold shadow-lg"
              >
                <span>Bil Monthly</span>
                <b-button
                  variant="primary"
                  size="lg"
                  class="text-white rounded-lg"
                  >Bil Yearly</b-button
                >
              </div>
            </b-col>

            <b-row class="mx-lg-5 mt-5">
              <b-col cols="12" lg="4" md="4" sm="12" class="mt-2">
                <b-card class="rounded-lg shadow">
                  <div class="text-center d-flex flex-column">
                    <h4>Free</h4>
                    <p class="text-muted">Have a go test your superpowers</p>
                    <span class="d-inline">
                      <div class="money">&#36;0</div>
                    </span>
                  </div>
                  <div class="light-green p-2 mt-4 rounded-lg">
                    <div class="d-flex flex-row my-3">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z"
                          fill="#54BD95"
                        />
                      </svg>

                      <span class="ml-2">2 Users</span>
                    </div>
                    <div class="d-flex flex-row my-3">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z"
                          fill="#54BD95"
                        />
                      </svg>

                      <span class="ml-2">2 Files</span>
                    </div>
                    <div class="d-flex flex-row my-3">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z"
                          fill="#54BD95"
                        />
                      </svg>

                      <span class="ml-2">Public Share & Comments</span>
                    </div>
                    <div class="d-flex flex-row my-3">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z"
                          fill="#54BD95"
                        />
                      </svg>

                      <span class="ml-2">Chat & Support</span>
                    </div>
                    <div class="d-flex flex-row my-3">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z"
                          fill="#54BD95"
                        />
                      </svg>

                      <span class="ml-2">New income apps</span>
                    </div>
                    <b-button block class="rounded-lg btn-white shadow-sm"
                      >Signup for free</b-button
                    >
                  </div>
                </b-card>
              </b-col>
              <b-col cols="12" lg="4" md="4" sm="12" class="mt-2">
                <b-card
                  class="rounded-lg primary-card shadow"
                  bg-variant="primary"
                >
                  <div>
                    <div
                      class="text-center d-flex flex-column text-white position-relative"
                    >
                      <h4>Pro</h4>
                      <p>
                        Experientce the power<br />
                        of invinity posibilities
                      </p>
                      <span class="d-inline">
                        <div class="money">&#36;8</div>
                      </span>
                      <div class="my-4">
                        <div class="p-2 card-saving rounded-lg d-inline">
                          Save $50 a year
                        </div>
                      </div>
                    </div>
                    <div class="bg-white p-3 rounded-lg">
                      <div class="d-flex flex-row my-3">
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z"
                            fill="#54BD95"
                          />
                        </svg>

                        <span class="ml-2">4 Users</span>
                      </div>
                      <div class="d-flex flex-row my-3">
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z"
                            fill="#54BD95"
                          />
                        </svg>

                        <span class="ml-2">All Apps</span>
                      </div>
                      <div class="d-flex flex-row my-3">
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z"
                            fill="#54BD95"
                          />
                        </svg>

                        <span class="ml-2">Unlimited editable exports</span>
                      </div>
                      <div class="d-flex flex-row my-3">
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z"
                            fill="#54BD95"
                          />
                        </svg>

                        <span class="ml-2">Folder and Callobration</span>
                      </div>
                      <div class="d-flex flex-row my-3">
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z"
                            fill="#54BD95"
                          />
                        </svg>

                        <span class="ml-2">All incomming apps</span>
                      </div>
                      <b-button
                        block
                        variant="primary text-white"
                        class="rounded-lg"
                        >Go to pro</b-button
                      >
                    </div>
                  </div>
                </b-card>
              </b-col>
              <b-col cols="12" lg="4" md="4" sm="12" class="mt-2">
                <b-card class="rounded-lg shadow">
                  <div class="text-center d-flex flex-column">
                    <h4>Business</h4>
                    <p class="text-muted">
                      Unveil new superpowers and join the Design Leaque
                    </p>
                    <span class="d-inline">
                      <div class="money">&#36;16</div>
                    </span>
                  </div>
                  <div class="light-green p-3 mt-4 rounded-lg">
                    <div class="d-flex flex-row my-3">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z"
                          fill="#54BD95"
                        />
                      </svg>

                      <span class="ml-2">2 Users</span>
                    </div>
                    <div class="d-flex flex-row my-3">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z"
                          fill="#54BD95"
                        />
                      </svg>

                      <span class="ml-2">2 Files</span>
                    </div>
                    <div class="d-flex flex-row my-3">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z"
                          fill="#54BD95"
                        />
                      </svg>

                      <span class="ml-2">Public Share & Comments</span>
                    </div>
                    <div class="d-flex flex-row my-3">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z"
                          fill="#54BD95"
                        />
                      </svg>

                      <span class="ml-2">Chat & Support</span>
                    </div>
                    <div class="d-flex flex-row my-3">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z"
                          fill="#54BD95"
                        />
                      </svg>

                      <span class="ml-2">New income apps</span>
                    </div>
                    <b-button block class="rounded-lg btn-white shadow-sm"
                      >Goto Business</b-button
                    >
                  </div>
                </b-card>
              </b-col>
            </b-row>
          </div>
        </b-container>
      </section>
    </div>

    <section class="bg-dark text-white pt-5 d-none">
      <b-container>
        <b-row>
          <b-col cols="12" lg="6" sm="12" md="6">
            <h2>People are Saying about it</h2>
            <p>
              Everiting you need to accept payment and grow your money of manage
              anywhere on plan
            </p>
            <div class="d-flex flex-column">
              <div class="my-5">
                <svg
                  width="45"
                  height="38"
                  viewBox="0 0 45 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.5 0H21.5L14.5 38H0L11.5 0Z" fill="#D9D9D9" />
                  <path d="M35 0H45L38 38H23.5L35 0Z" fill="#D9D9D9" />
                </svg>
              </div>
              <p>
                I'm very helped by this E-wallet application, my days are very
                easy to use this application and its very helpfull in my live,
                even i can pay a short time
              </p>
              <p class="my-4">_ Aria Zinanrio</p>

              <div class="d-flex flex-row my-4">
                <b-avatar
                  size="66px"
                  class="mx-2"
                  :src="require(`~/assets/img/avatar/avatar_01.png`)"
                />
                <b-avatar
                  size="66px"
                  class="mx-2"
                  :src="require(`~/assets/img/avatar/avatar_02.png`)"
                />
                <b-avatar
                  size="66px"
                  class="mx-2"
                  :src="require(`~/assets/img/avatar/avatar_03.png`)"
                />
                <b-avatar
                  size="66px"
                  class="mx-2"
                  :src="require(`~/assets/img/avatar/avatar_04.png`)"
                />
                <b-avatar size="66px" class="mx-2">
                  <b-icon-play-fill scale="2" />
                </b-avatar>
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="6" sm="12" md="6">
            <b-card bg-variant="monocrhome" class="p-lg-5">
              <div class="d-flex flex-column">
                <div class="d-flex mx-auto">
                  <svg
                    width="73"
                    height="86"
                    viewBox="0 0 73 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M72.0585 20.8486V20.4268H72.0234C71.8125 15.2245 68.2974 10.0574 61.4255 6.103C47.3302 -2.03433 24.4824 -2.03433 10.4749 6.103C3.46239 10.1805 -0.017509 15.5233 6.62377e-05 20.8662V31.8859V32.0792V42.9055V43.0989V53.9252V54.1185V65.1382C0.0352167 70.4811 3.58541 75.8239 10.6331 79.8838C17.6983 83.9613 26.9253 86 36.1347 86C45.3617 86 54.5536 83.9613 61.5837 79.8838C68.5962 75.8064 72.0761 70.4635 72.0585 65.1382V54.1185V53.5034V43.0989V42.4486V32.044V31.4289V20.8486C72.0585 20.8486 72.0585 20.8662 72.0585 20.8486ZM17.8038 14.2403L19.7546 13.1155C20.2467 12.8343 21.02 12.8343 21.5297 13.1155L23.9375 14.504C24.4648 14.1876 25.0096 13.8888 25.5369 13.5725L23.1291 12.184C22.637 11.9028 22.637 11.4459 23.1291 11.1647L25.0799 10.0399C25.572 9.75865 26.3629 9.75865 26.855 10.0399L29.9307 11.8149L30.3349 11.6919C33.7797 10.6374 37.4353 10.1629 41.337 10.4441C44.3951 10.6726 47.1368 11.3931 49.6501 12.4477C50.6343 12.8519 51.5482 13.3088 52.3743 13.7834C54.5536 15.0488 56.2232 16.5251 57.5238 18.1948L57.7874 18.6517C58.0862 19.2668 57.7347 19.6887 56.6978 19.9347C55.6081 20.2159 54.5009 20.462 53.3936 20.708C52.6203 20.8662 52.0755 20.831 51.6009 20.5498C51.4779 20.4795 51.3725 20.3917 51.2494 20.3038C50.5113 19.6184 49.8434 18.8802 49.0525 18.2123C48.3495 17.5972 47.5762 17.0172 46.6975 16.5075C45.5375 15.8397 44.2018 15.2773 42.6024 14.8906C40.2122 14.2931 37.8747 14.4337 35.5196 14.9785L35.4317 14.9961L41.3897 18.4408C41.8818 18.722 41.8818 19.179 41.3897 19.4602L39.4389 20.585C38.9468 20.8662 38.1559 20.8662 37.6638 20.585L30.827 16.6481C30.3173 16.9469 29.7725 17.2633 29.2277 17.5796L36.0644 21.5165C36.5565 21.7977 36.5565 22.2546 36.0644 22.5358L34.1136 23.6607C33.6215 23.9419 32.8482 23.9419 32.3385 23.6607L26.0993 20.0577C24.7108 21.745 24.2715 23.4146 25.8357 25.1546C26.5035 25.8927 27.3647 26.543 28.3665 27.123C29.2453 27.6327 30.2119 28.072 31.2488 28.4763C32.4088 28.8981 33.6391 29.2847 34.8342 29.7241C35.0275 29.7944 35.1857 29.8647 35.3263 29.9526C35.8008 30.2338 35.8711 30.5501 35.5899 30.9895C35.1857 31.6574 34.7287 32.3077 34.2366 32.9404C33.8324 33.5204 33.0767 33.7313 31.987 33.5204C30.8973 33.2743 29.8252 32.9755 28.7707 32.6416C26.8374 32.0089 25.0975 31.2707 23.586 30.392C22.0043 29.4781 20.6685 28.4235 19.5964 27.2284C17.0832 24.3812 17.1359 21.4813 19.1922 18.5638C19.5964 17.9839 20.1589 17.4742 20.651 16.9293L17.7335 15.2421C17.3117 14.9785 17.3117 14.5215 17.8038 14.2403ZM10.6331 35.6118C24.746 43.7667 47.5586 43.7667 61.5837 35.6118C63.763 34.3464 65.5732 32.9404 67.0671 31.4641V32.0792C67.0847 35.7348 64.1672 39.5487 59.0704 42.5013C53.0245 46.0163 44.8872 47.9496 36.1347 47.9496C27.3823 47.9496 19.1922 46.0163 13.1112 42.5013C7.96165 39.5311 4.99143 35.6997 4.95628 32.0616V31.341C6.52048 32.8525 8.38345 34.3112 10.6331 35.6118ZM59.088 64.5231C53.0421 68.0381 44.9048 69.9714 36.1523 69.9714C27.3999 69.9714 19.2098 68.0381 13.1288 64.5231C7.97922 61.5529 5.00901 57.7215 4.97386 54.0834V53.5561C6.52048 55.0852 8.36588 56.5263 10.6331 57.8269C17.6983 61.9044 26.9253 63.9431 36.1347 63.9431C45.3617 63.9431 54.5536 61.9044 61.5837 57.8269C63.763 56.5615 65.5732 55.1555 67.0671 53.6791V54.1185C67.1023 57.7742 64.1848 61.5704 59.088 64.5231ZM59.088 53.521C53.0421 57.036 44.9048 58.9693 36.1523 58.9693C27.3999 58.9693 19.2098 57.036 13.1288 53.521C7.97922 50.5508 5.00901 46.7194 4.97386 43.0813V42.554C6.52048 44.0831 8.36588 45.5242 10.6331 46.8248C17.6983 50.9023 26.9253 52.941 36.1347 52.941C45.3617 52.941 54.5536 50.9023 61.5837 46.8248C63.763 45.5594 65.5732 44.1534 67.0671 42.6771V43.1164C67.1023 46.7545 64.1848 50.5508 59.088 53.521ZM59.088 75.5427C53.0421 79.0578 44.9048 80.9911 36.1523 80.9911C27.3999 80.9911 19.2098 79.0578 13.1288 75.5427C7.97922 72.5725 5.00901 68.7411 4.97386 65.1031V64.5758C6.52048 66.1048 8.36588 67.546 10.6331 68.8466C17.6983 72.924 26.9253 74.9628 36.1347 74.9628C45.3617 74.9628 54.5536 72.924 61.5837 68.8466C63.763 67.5812 65.5732 66.1751 67.0671 64.6988V65.1382C67.1023 68.7763 64.1848 72.5901 59.088 75.5427Z"
                      fill="#54BD95"
                    />
                  </svg>
                </div>

                <h3 class="text-center">Get Started</h3>
                <div>
                  <label>Email</label>
                  <b-form-input placeholder="Enter your email" />
                </div>
                <div class="my-2">
                  <label>Message</label>
                  <b-form-textarea rows="2" placeholder="What are you say!" />
                </div>
                <div class="my-2">
                  <b-button block variant="primary" class="text-white"
                    >Request Demo</b-button
                  >
                </div>
                <div class="clearfix">
                  <span class="float-right"
                    >or
                    <b-link href="#" class="text-white"
                      >Start Free Trial</b-link
                    >
                  </span>
                </div>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="bg-dark text-white pt-5">
      <b-container>
        <b-row>
          <b-col cols="12" lg="6" md="6">
            <div>
              <div>
                <img id="footer-logo" :src="require(`~/assets/img/logo-no-background.png`)">
              </div>
              <p class="my-3 d-none">Get Started now try our product</p>
              <div
                class="d-flexd d-none flex-row align-items-center absolute border border-white pl-3 py-1 pr-1 box-subsctibe w-75"
              >
                <b-form-input
                  placeholder="Enter your email here"
                  size="sm"
                  class="rounded-lg bg-dark text-white border-0 input-subscribe"
                >
                </b-form-input>
                <b-avatar class="text-white ml-2" variant="primary">
                  <b-icon-arrow-right scale="1.6" />
                </b-avatar>
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="6" md="6" class="d-none">
            <b-row>
              <b-col
                lg="4"
                md="4"
                sm="6"
                cols="12"
                class="d-flex flex-column mt-3"
              >
                <h6 class="mt-2 mb-4">Support</h6>
                <b-link href="#" class="text-white">Help Center</b-link>
                <b-link href="#" class="text-white">Account Information</b-link>
                <b-link href="#" class="text-white">About</b-link>
                <b-link href="#" class="text-white">Contact Us</b-link>
              </b-col>
              <b-col
                lg="4"
                md="4"
                sm="6"
                cols="12"
                class="d-flex flex-column mt-3"
              >
                <h6 class="mt-2 mb-4">Help and Solution</h6>
                <b-link href="#" class="text-white">Talk to support</b-link>
                <b-link href="#" class="text-white">Support docs</b-link>
                <b-link href="#" class="text-white">System status</b-link>
                <b-link href="#" class="text-white">Covid Response</b-link>
              </b-col>
              <b-col
                lg="4"
                md="4"
                sm="12"
                cols="12"
                class="d-flex flex-column mt-3"
              >
                <h6 class="mt-2 mb-4">Product</h6>

                <b-link href="#" class="text-white">Update</b-link>
                <b-link href="#" class="text-white">Security</b-link>
                <b-link href="#" class="text-white">Beta Test</b-link>
                <b-link href="#" class="text-white">Pricing product</b-link>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-5 bg-dark text-white">
      <b-container>
        <b-row>
          <b-col cols="12" lg="6" md="6" sm="6">
            <h6>&copy; 2023 DevBop</h6>
          </b-col>
          <b-col cols="12" lg="6" md="6" sm="6">
            <div class="clearfix">
              <h6 class="float-lg-right float-md-right d-none">
                Terms and Conditions . Privacy Policy
              </h6>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import {
  BIconPlayFill,
  BIconArrowRight,
  BIconGithub,
  BIconGlobe,
} from 'bootstrap-vue'
export default {
  name: 'IndexPage',
  components: {
    BIconPlayFill,
    BIconArrowRight,
    BIconGithub,
    BIconGlobe,
  },
}
</script>

<style>
#footer-logo{
  width: 180px;
}
</style>

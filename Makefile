JEKYLL_VERSION=4.2.0

serve:
	docker run --rm \
	  --volume=$(PWD):/srv/jekyll \
	  -p 4000:4000 \
	  -it jekyll/jekyll:$(JEKYLL_VERSION) \
	  jekyll serve

build:
	docker run --rm \
	  --volume=$(PWD):/srv/jekyll \
	  -it jekyll/jekyll:$(JEKYLL_VERSION) \
	  jekyll build

new:
	docker run --rm \
	  --volume=$(PWD):/srv/jekyll \
	  -it jekyll/jekyll:$(JEKYLL_VERSION) \
	  jekyll new . --blank --force

# This task is for building a site into 'docs' folder so that we can host our demo site on the 'master' branch. You probably don't need this task.
build-for-gh:
	docker run --rm \
	  --volume=$(PWD):/srv/jekyll \
	  -it jekyll/jekyll:$(JEKYLL_VERSION) \
	  jekyll build --destination docs
